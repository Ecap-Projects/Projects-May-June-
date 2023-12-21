package com.excelr.controller;

import java.util.List;

import com.excelr.entity.MyGroup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.excelr.entity.Employee;
import com.excelr.request.AddEmployeesRequest;
import com.excelr.service.GroupEmployeeService;

@RestController
@RequestMapping("/groupemployee")
@CrossOrigin
public class GroupEmployeeController {
	
	@Autowired
	GroupEmployeeService groupEmployeeService;
	
	@PostMapping("/addemployee")
	public ResponseEntity<String> addEmpToGroup(@RequestParam int group_id,@RequestParam int employee_id){
		try {
			groupEmployeeService.addEmployeeToGroup(group_id, employee_id);
			return new ResponseEntity<>("Emp Added",HttpStatus.OK);
			
		}catch (Exception e) {
			return new ResponseEntity<>("Error occured",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/addemployees")
	public ResponseEntity<String> addEmpsToGroup(@RequestBody AddEmployeesRequest addEmployeesRequest ){
		try {
			groupEmployeeService.addEmployeesToGroup(addEmployeesRequest.getGroup_id(),addEmployeesRequest.getEmployee_ids());
			return new ResponseEntity<>("Emps Added",HttpStatus.OK);
			
		}catch (Exception e) {
			return new ResponseEntity<>("Error occured",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	@GetMapping("/{group_id}/getemployees")
	public ResponseEntity<List<Employee>> getAllEmpsByGroupId(@PathVariable int group_id){
		
		return new ResponseEntity<List<Employee>>(groupEmployeeService.getEmployeeByGroupId(group_id),HttpStatus.OK);
		
		
	}
	
	
	@DeleteMapping("/{group_id}/employee/{employee_id}")
	public ResponseEntity<String> removeEmpFromGroup(@PathVariable int group_id,@PathVariable int employee_id){
		
		try {
			groupEmployeeService.removeEmployeeFromGroup(group_id, employee_id);
			return new ResponseEntity<>("Deleted",HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>("ErrorInRemoveEmpFromGroup",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("getgroups/{id}")
	public ResponseEntity<List<MyGroup>> getAllGroupsByEmployeeId(@PathVariable int id){
		return new ResponseEntity<List<MyGroup>>(groupEmployeeService.getAllGroupsByEmployeeId(id),HttpStatus.OK);
	}
	
	
	
}
;