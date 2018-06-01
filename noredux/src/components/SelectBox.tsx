import * as React from 'react';

import { INamed } from '../../interfaces';

interface ISelectBoxProps {
    items: INamed[];
    label: string;
    onChange(value): void;
}

interface ISelectBoxState {
    value: string;
}

export class SelectBox extends React.Component<ISelectBoxProps, ISelectBoxState> {
    public readonly state: ISelectBoxState = {
        value: '-',
    };

    public handleChange(e): void {
        const value = e.target.value;
        this.setState({value});
        this.props.onChange(value);
    }

    public componentWillReceiveProps(props): void {
        if (props.items.length === 1) {
            this.setState({value: props.items[0].id});
        }
    }

    public render() {
        const items = this.props.items.map(z => {
            return <option value={z.id}>{z.name}</option>
        });

        return (
            <label>
                {this.props.label}:
                <select value={this.state.value} onChange={e => this.handleChange(e)}>
                    <option value='-' disabled></option>
                    {items}
                </select>
            </label>
        );
    }
}