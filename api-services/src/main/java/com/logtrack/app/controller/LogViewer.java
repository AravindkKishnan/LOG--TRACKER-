package com.logtrack.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.logtrack.app.model.LogEntity;
import com.logtrack.app.repositry.LogRepo;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = {"http://localhost:5173",
    "https://log-track.onrender.com"})
public class LogViewer {

    @Autowired
    private LogRepo repo;

    @PostMapping("/test")
public String addTestLog() {
    LogEntity log = new LogEntity();
    log.setLevel("INFO");
    log.setService("api");
    log.setMessage("Test log");
    repo.save(log);
    return "Saved";
}

    @GetMapping("/data")
    public List<LogEntity> getAllLogs(
            @RequestParam(required = false) String level,
            @RequestParam(required = false) String service
    ) {
        List<LogEntity> logs = repo.findAll();

        return logs.stream()
                .filter(log ->
                        level == null || level.isEmpty() ||
                        log.getLevel().equalsIgnoreCase(level)
                )
                .filter(log ->
                        service == null || service.isEmpty() ||
                        log.getService().toLowerCase()
                                .contains(service.toLowerCase())
                )
                .toList();
    }
}