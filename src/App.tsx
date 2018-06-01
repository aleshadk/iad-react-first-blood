import { FlexDirectionProperty } from 'csstype';
import * as React from 'react';

import { IEmployee, INamed, IDepatment } from '../interfaces';
import { SelectBox } from './components/SelectBox';

export class App extends React.Component<{data: IEmployee[]}, {data: IEmployee[]}> {
    constructor(props: {data: IEmployee[]}) {
        super(props);
        this.state = {
            data: props.data // #TODO do i need copy?
        }
    }

    public render() {
        const style = {
            display: 'flex',
            flexDirection: 'column' as FlexDirectionProperty
        };

        this.state.data.map(z => ({id: z.id, name: z.name}));

        const employees: INamed[] = [];
        const departments: IDepatment[] = [];
        const locations: INamed[] = [];

        this.state.data.forEach(z => {
            employees.push({id: z.id, name: z.name});

            if (!departments.find(y => y.id === z.department.id)) {
                departments.push(z.department);
            }

            if (!locations.find(y => y.id === z.location.id)) {
                locations.push(z.location);
            }
        });

        return (
            <div style={style}>
                <SelectBox items={employees} label='Employee' onChange={value => this.onEmployeeChange(value)}/>
                <SelectBox items={departments} label='Department' onChange={value => this.onDepartmentChange(value)} />
                <SelectBox items={locations} label='Location' onChange={value => this.onLocationChange(value)} />
            </div>
        );
    }

    private onEmployeeChange(value): void {
        this.filter(z => z.id === value);
    }

    private onDepartmentChange(value): void {
        this.filter(z => z.department.id === value);
    }

    private onLocationChange(value): void {
        this.filter(z => z.location.id === value);
    }

    private filter(filterFunction: (z: IEmployee) => boolean): void {
        this.setState({
            data: this.props.data.filter(z => filterFunction(z))
        });
    }
}