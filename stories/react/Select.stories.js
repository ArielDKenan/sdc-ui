import React from 'react';
import Examples from './utils/Examples.js';

import Select, {SelectOption, SelectSeparator} from '../../src/react/form-elements/Select';
import {Checkbox, Button, SVGIcon} from '../../src/react/index';

let collapsed = false;
let value = '...';

class SelectExample extends React.Component {

	constructor() {
		super();
		this.state = {
			value: '',
			values: ['I am an option', 'I am also an option', 'Me too!!!'],
			collapsed: true,
			checked: [false, false, false]
		};
	}

	onSelect(value) {
		this.setState({
			value
		});
	}

	onClickCheckbox(e, i) {
		let checked = [...this.state.checked];
		checked[i] = e;
		this.setState({
			checked
		});
	}

	onClose() {
		this.setState({
			collapsed: true
		});
	}

	onClear() {
		this.setState({
			value: '',
			checked: [false, false, false]
		});
	}

	render() {
		let {value, values, collapsed, checked} = this.state;
		return (
			<div>
				<input />
				<br /><br />
				<Select
					label="Hi I'm a label"
					placeholder='Select a value...'
					editable={false}
					collapsed={collapsed}
					value={value}
					onChange={(e) => this.setState({value: e.target.value})}
					onClick={() => this.setState({collapsed: !collapsed})}
					isValid
					required>
					<SelectOption header>Header 1</SelectOption>
					<SelectOption selected={value === values[0]} onSelect={() => this.onSelect(values[0])} group>{values[0]}</SelectOption>
					<SelectOption selected={value === values[1]} onSelect={() => this.onSelect(values[1])} group>{values[1]}</SelectOption>
					<SelectOption selected={value === values[2]} onSelect={() => this.onSelect(values[2])} group>{values[2]}</SelectOption>
					<SelectSeparator />
					<SelectOption header>Header 2</SelectOption>
					<SelectOption selectable={false} group>
						<Checkbox label='I am a Checkbox' checked={checked[0]} onChange={e => this.onClickCheckbox(e, 0)} />
					</SelectOption>
					<SelectOption selectable={false} group>
						<Checkbox label='I am a Checkbox' checked={checked[1]} onChange={e => this.onClickCheckbox(e, 1)} />
					</SelectOption>
					<SelectOption selectable={false} group>
						<Checkbox label='I am a Checkbox' checked={checked[2]} onChange={e => this.onClickCheckbox(e, 2)} />
					</SelectOption>
					{/*<SelectSeparator />
										<SelectOption selectable={false} className='button-bar'>
											<Button btnType='link' className='btn-default' onClick={() => this.onClear()}>CLEAR ALL</Button>
											<div>
												<Button onClick={() => this.onClose()}>DONE</Button>
												<Button btnType='outline' onClick={() => this.onClose()}>CANCEL</Button>
											</div>
										</SelectOption>*/}
				</Select>
				<br /><br />
				<span className='labelish'>Some input:</span><input />
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				<div className='sdc-input__wrapper'>
					<label className='sdc-input__label'>ATT Dropdown</label>
					<input type='button' value='Please choose option' className='sdc-input sdc-select uncollapsed placeholder' />
					<SVGIcon name='back' className='clickable' />
					<ul className='sdc-select__menu uncollapsed'>
						<li className='sdc-select__option header'>Group 1 Title</li>
						<li className='sdc-select__option group selected'>First option</li>
						<li className='sdc-select__option group'>Second option</li>
						<li className='sdc-select__option header'>Group 2 Title</li>
						<li className='sdc-select__option group'>First option</li>
						<li className='sdc-select__option group'>Second option</li>
					</ul>
				</div>
			</div>
		);
	}

}

let examples = {
	Select: {
		jsx: <SelectExample />,
	},
};

const Selects = () => (
	<Examples examples={examples} />
);

export default Selects;
