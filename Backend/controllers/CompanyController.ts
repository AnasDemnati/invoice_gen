import { Request, Response } from 'express';
import CompanyModel from '../models/CompanyModel';

export const getCompanies = async (req: Request, res: Response): Promise<void> => {
  try {
    const companies = await CompanyModel.find();
    res.send(companies);
  } catch (error) {
    console.log(error);
    res.send({ error, msg: 'Something went wrong' });
  }
};

export const saveCompany = async (req: Request, res: Response): Promise<void> => {
  try {
    const { company } = req.body;
    const data = await CompanyModel.create({ company });
    console.log('Saved....');
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.send({ error, msg: 'Something went wrong' });
  }
};

