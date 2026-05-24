
package com.logtrack.app.serviceimpl;

import java.time.LocalDateTime;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.logtrack.app.model.LogEntity;


@Service
public class LogService {
	
	private static final Logger logger = LoggerFactory.getLogger(LogService.class);
	 private final KafkaTemplate<String, LogEntity> kafkaTemplate;
	 
	 public LogService(KafkaTemplate<String, LogEntity> kafkaTemplate) {
	        this.kafkaTemplate = kafkaTemplate;
	    }
	
	public void log(String level, String message, String service) 
	{
	    LogEntity log = new LogEntity();
	    log.setLevel(level);
	    log.setMessage(message);
	    log.setService(service);
	    log.setTimestamp(LocalDateTime.now());

	   
	    try {

	        kafkaTemplate.send("app-logs",log);

	    } catch (Exception e) {
	        logger.error("Error sending log to Kafka", e);
	    }
	}
		
}