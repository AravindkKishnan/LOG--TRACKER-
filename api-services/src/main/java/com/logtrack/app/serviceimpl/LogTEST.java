//package com.logtrack.app.serviceimpl;
//
//import org.slf4j.Logger;
//
//import org.slf4j.LoggerFactory;
//import org.springframework.kafka.core.KafkaTemplate;
//
//import com.logtrack.app.model.LogEntity;
//import com.logtrack.app.service.LogServiceInter;
//
//public class LogTEST implements LogServiceInter {
//	
//	private static final Logger logger = LoggerFactory.getLogger(LogTEST.class);
//	 private final KafkaTemplate<String, String> kafkaTemplate;
//	 
//	 public LogTEST(KafkaTemplate<String, String> kafkaTemplate) {
//	        this.kafkaTemplate = kafkaTemplate;
//	    }
//	@Override
//	public void LogInfo(String message) {
//
//        // Console log
//        logger.info(message);
//
//        // Send to Kafka
//        String json = String.format(
//            "{\"level\":\"INFO\",\"message\":\"%s\",\"service\":\"LogService\",\"timestamp\":%d}",
//            message,
//            System.currentTimeMillis()
//        );
//
//      kafkaTemplate.send("app-logs", json);
//    }
//	@Override
//	public void log(String level, String message, String service) {
//		String json = String.format(
//	            "{\"level\":\"%s\",\"message\":\"%s\",\"service\":\"%s\",\"timestamp\":%d}",
//	            level, message, service, System.currentTimeMillis()
//	        );
//
//        kafkaTemplate.send("app-logs", json);
//	    }
//
//		
//	}
//	
//
