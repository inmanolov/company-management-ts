import { Request, Response } from 'express';
import knex from '../data/db';

export const getCompanies = async(req: Request, res: Response) => {
    try {
        const companies = await knex('companies')
        .select()
        .orderBy('id', 'desc')

        res.status(200).json(companies);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const updateCompany = async(req: Request, res: Response) => {
    try {
        const { id, name, country } = req.body;

        await knex('companies')
            .where('id', id)
            .update({ name: name, country: country });

    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const addCompany = async(req: Request, res: Response) => {
    try {
        const { name, country } = req.body;

        await knex('companies')
            .insert({
                name: name,
                country: country,
            })

    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteCompany = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        
        await knex('companies')
            .where('id', id)
            .del()
            
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}