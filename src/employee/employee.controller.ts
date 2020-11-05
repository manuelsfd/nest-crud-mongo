import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CreateEmployeeDTO } from './dto/employee.dto';

import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post('/create')
  async createEmployee(
    @Res() res,
    @Body() createEmployeeDto: CreateEmployeeDTO,
  ) {
    try {
      const employee = await this.employeeService.createEmployee(
        createEmployeeDto,
      );

      res.status(HttpStatus.OK).json({
        estatus: true,
        employee,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        error,
      });
    }
  }

  @Get('/all')
  async getEmployees(@Res() res) {
    try {
      const employees = await this.employeeService.getEmployees();

      res.status(HttpStatus.OK).json({
        estatus: true,
        employees,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        error,
      });
    }
  }

  @Get('/:employeeID')
  async getEmployee(@Res() res, @Param('employeeID') employeeID) {
    try {
      const employee = await this.employeeService.getEmployee(employeeID);

      res.status(HttpStatus.OK).json({
        estatus: true,
        employee,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        error,
      });
    }
  }

  @Delete('/delete')
  async deleteEmployee(@Res() res, @Query('employeeID') employeeID) {
    // url con el query = /employee/delete?employeeID=

    try {
      const employee = await this.employeeService.deleteEmployee(employeeID);

      //valida el delete
      // opcional -> if (!employee) throw new NotFoundException('Empleado no existe');

      res.status(HttpStatus.OK).json({
        estatus: true,
        employee,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        error,
      });
    }
  }

  @Put('/update/:employeeID')
  async updateEmployee(
    @Res() res,
    @Body() createEmployeeDto: CreateEmployeeDTO,
    @Param('employeeID') employeeID,
  ) {
    try {
      console.log('c -> ', createEmployeeDto);
      console.log('i -> ', employeeID);

      const employee = await this.employeeService.updateEmployee(
        employeeID,
        createEmployeeDto,
      );

      console.log('e -> ', employee);

      res.status(HttpStatus.OK).json({
        estatus: true,
        employee,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        error,
      });
    }
  }
}
