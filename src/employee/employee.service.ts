import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Employee } from './interfaces/employee.interface';
import { CreateEmployeeDTO } from './dto/employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee') private readonly employeModule: Model<Employee>,
  ) {}

  async getEmployees(): Promise<Employee[]> {
    return await this.employeModule.find();
  }

  async getEmployee(employeeID: string): Promise<Employee> {
    return await this.employeModule.findById(employeeID);
  }

  async createEmployee(
    createEmployeeDTO: CreateEmployeeDTO,
  ): Promise<Employee> {
    return await this.employeModule.create(createEmployeeDTO);
  }

  async updateEmployee(
    employeeID: string,
    createEmployeeDTO: CreateEmployeeDTO,
  ): Promise<Employee> {
    return await this.employeModule.findByIdAndUpdate(
      employeeID,
      createEmployeeDTO,
      { new: true },
    );
  }

  async deleteEmployee(employeeID: string): Promise<Employee> {
    return await this.employeModule.findByIdAndDelete(employeeID);
  }
}
