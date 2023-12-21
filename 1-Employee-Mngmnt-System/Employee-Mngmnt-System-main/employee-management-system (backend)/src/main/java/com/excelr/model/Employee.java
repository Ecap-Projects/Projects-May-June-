package com.excelr.model;


import jakarta.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String currentproject;
    private Long contact;
    private String department;
    private String reporting;
    private String email;
    private double salary;
    private int age;
    private String joiningdate;
    private String pastproject;
    private String currentaddress;
    private String permanentaddress;
    private String onboardingemployee;
	public Employee() {
		
	}
	public Employee(Long id, String name, String currentproject, Long contact, String department, String reporting,
			String email, double salary, int age, String joiningdate, String pastproject, String currentaddress,
			String permanentaddress, String onboardingemployee) {
		super();
		this.id = id;
		this.name = name;
		this.currentproject = currentproject;
		this.contact = contact;
		this.department = department;
		this.reporting = reporting;
		this.email = email;
		this.salary = salary;
		this.age = age;
		this.joiningdate = joiningdate;
		this.pastproject = pastproject;
		this.currentaddress = currentaddress;
		this.permanentaddress = permanentaddress;
		this.onboardingemployee = onboardingemployee;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCurrentproject() {
		return currentproject;
	}
	public void setCurrentproject(String currentproject) {
		this.currentproject = currentproject;
	}
	public Long getContact() {
		return contact;
	}
	public void setContact(Long contact) {
		this.contact = contact;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getReporting() {
		return reporting;
	}
	public void setReporting(String reporting) {
		this.reporting = reporting;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getJoiningdate() {
		return joiningdate;
	}
	public void setJoiningdate(String joiningdate) {
		this.joiningdate = joiningdate;
	}
	public String getPastproject() {
		return pastproject;
	}
	public void setPastproject(String pastproject) {
		this.pastproject = pastproject;
	}
	public String getCurrentaddress() {
		return currentaddress;
	}
	public void setCurrentaddress(String currentaddress) {
		this.currentaddress = currentaddress;
	}
	public String getPermanentaddress() {
		return permanentaddress;
	}
	public void setPermanentaddress(String permanentaddress) {
		this.permanentaddress = permanentaddress;
	}
	public String getOnboardingemployee() {
		return onboardingemployee;
	}
	public void setOnboardingemployee(String onboardingemployee) {
		this.onboardingemployee = onboardingemployee;
	}
	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", currentproject=" + currentproject + ", contact=" + contact
				+ ", department=" + department + ", reporting=" + reporting + ", email=" + email + ", salary=" + salary
				+ ", age=" + age + ", joiningdate=" + joiningdate + ", pastproject=" + pastproject + ", currentaddress="
				+ currentaddress + ", permanentaddress=" + permanentaddress + ", onboardingemployee="
				+ onboardingemployee + "]";
	}
	
    
    
}