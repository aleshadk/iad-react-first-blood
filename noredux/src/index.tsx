import * as React from 'react';
import { render } from 'react-dom';

import { App } from './App';
import { IEmployee } from '../interfaces';

const locations = {
    dubna: {id: '1', name: 'Dubna'},
    moscow: {id: '2', name: 'Moscow'},
    spb: {id: '3', name: 'Spb'},
    omsk: {id: '4', name: 'Omsk'},
    dnepr: {id: '5', name: 'Dnepr'},
};

const department = {
    iad: {id: '1', name: 'IAD', locations: [locations.dubna, locations.moscow]},
    moh: {id: '2', name: 'MOH', locations: [locations.moscow]},
    sidr: {id: '3', name: 'SIDR', locations: [locations.dubna]}
}

const employees: IEmployee[] = [
    {id: '1', name: 'Nikita Egorov', location: locations.dubna, department: department.iad}, 
    {id: '2', name: 'Seva Arutyunov', location: locations.dubna, department: department.moh},
    {id: '3', name: 'Pasha Fedorov', location: locations.moscow, department: department.iad},
    {id: '3', name: 'Tema Leshchev', location: locations.dubna, department: department.iad},
    {id: '4', name: 'Vitya Pilipenko', location: locations.moscow, department: department.sidr},
    {id: '5', name: 'Lesha Didukh', location: locations.dubna, department: department.moh},
];

render(
    <App data={employees} />,
    document.getElementById('root')
);