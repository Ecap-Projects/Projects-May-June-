package com.excelr.service;


import com.excelr.exception.EmployeeNotFoundException;
import com.excelr.model.Employee;
import com.excelr.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException(id));
    }

    @Override
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Employee updateEmployee(Long id, Employee updatedEmployee) {
        Employee existingEmployee = getEmployeeById(id);
        existingEmployee.setName(updatedEmployee.getName());
        existingEmployee.setDepartment(updatedEmployee.getDepartment());
        existingEmployee.setReporting(updatedEmployee.getReporting());
        existingEmployee.setAge(updatedEmployee.getAge());
        existingEmployee.setJoiningdate(updatedEmployee.getJoiningdate());
        existingEmployee.setSalary(updatedEmployee.getSalary());
        existingEmployee.setContact(updatedEmployee.getContact());
        existingEmployee.setPermanentaddress(updatedEmployee.getPermanentaddress());
        existingEmployee.setEmail(updatedEmployee.getEmail());
        existingEmployee.setOnboardingemployee(updatedEmployee.getOnboardingemployee());
        existingEmployee.setCurrentproject(updatedEmployee.getCurrentproject());
        existingEmployee.setPastproject(updatedEmployee.getPastproject());
        existingEmployee.setCurrentaddress(updatedEmployee.getCurrentaddress());
        return employeeRepository.save(existingEmployee);
    }

    @Override
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
