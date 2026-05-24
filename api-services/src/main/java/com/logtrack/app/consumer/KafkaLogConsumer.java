
package com.logtrack.app.consumer;

import java.time.LocalDateTime;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.logtrack.app.model.LogEntity;
import com.logtrack.app.repositry.LogRepo;



@Service
public class KafkaLogConsumer {
	
	
	
	 @Autowired
     private LogRepo repo;
	 
	
	@KafkaListener(topics = "app-logs", groupId = "log-group-NEW")
    public void consume(String message) {
		try {


        LogEntity log = new LogEntity();
        String[] parts = message.split("\\|");

      
        log.setLevel(parts.length > 0 ? parts[0] : "INFO");
        log.setMessage(parts.length > 1 ? parts[1] : message);
        log.setService("SYSTEM"); // or app name
        log.setTimestamp(LocalDateTime.now());

        repo.save(log);
        
    
		}
	catch (Exception e) {
        System.out.println("❌ ERROR OCCURRED");
        e.printStackTrace();
    }
	}
}	 
