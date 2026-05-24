package com.logtrack.app.repositry;

import org.springframework.data.jpa.repository.JpaRepository;


import com.logtrack.app.model.LogEntity;

public interface LogRepo extends JpaRepository<LogEntity,Long> {

}
