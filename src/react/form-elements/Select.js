import React from 'react';
import PropTypes from 'prop-types';

import SVGIcon from '../SVGIcon';

export const SelectOption = ({selectable, selected, header, group, className, onSelect, disabled, children}) => {
	let optionClass = `sdc-select__option ${className} ${disabled ? 'disabled' : ''}`;
	optionClass += ` ${selectable ? '' : 'unselectable'} ${selected ? 'selected' : ''}`;
	optionClass += ` ${header ? 'header' : ''} ${group ? 'group' : ''}`;
	return (
		<li
			className={optionClass}
			onClick={selectable && onSelect}>
			{children}
		</li>
	);
};

SelectOption.propTypes = {
	selectable: PropTypes.bool,
	selected: PropTypes.bool,
	className: PropTypes.string,
	group: PropTypes.bool,
	header: PropTypes.bool,
	onSelect: PropTypes.func,
	disabled: PropTypes.bool
};

SelectOption.defaultProps = {
	selectable: true,
	selected: false,
	className: '',
	group: false,
	header: false,
	disabled: false
};

export const SelectSeparator = () => <div className='sdc-select__option separator' />;

class Select extends React.Component {

	render() {
		let {
			placeholder,
			value,
			required,
			isValid,
			className,
			label,
			name,
			collapsed,
			editable,
			onClick,
			onChange,
			disabled,
			children
		} = this.props;

		let selectElement;
		let selectClassName = `sdc-input sdc-select ${collapsed ? '' : 'uncollapsed'}`;

		if (editable) {
			selectElement = <input className={selectClassName} tpye='text' value={value} placeholder={placeholder} onChange={onChange} />;
		} else {
			if (!value) {
				value = placeholder;
				selectClassName += ' placeholder';
			}
			selectElement = <input className={selectClassName} type='button' value={value} onClick={() => !disabled && onClick && onClick()} />;
		}

		return (
			<div className={`sdc-input__wrapper ${className} ${isValid ? '' : 'error'} ${disabled ? 'disabled' : ''}`}>
				<label className={`sdc-input__label ${required ? 'required' : ''}`}>{label}</label>
				{!editable && <input type='hidden' name={name} value={value} />}
				{selectElement}
				<SVGIcon name='back' onClick={() => !disabled && onClick && onClick()} />
				<ul className={`sdc-select__menu ${collapsed ? '' : 'uncollapsed'}`}>
					{children}
				</ul>
			</div>
		);
	}

}

Select.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	name: PropTypes.string,
	collapsed: PropTypes.bool.isRequired,
	editable: PropTypes.bool,
	required: PropTypes.bool,
	isValid: PropTypes.bool,
	onClick: PropTypes.func,
	disabled: PropTypes.bool
};

Select.defaultProps = {
	colapsed: true,
	editable: false,
	required: false,
	isValid: true,
	value: '',
	className: '',
	disabled: false
};


	// rendererer() {
	// 	let {
	// 		placeholder,
	// 		value,
	// 		className,
	// 		label,
	// 		name,
	// 		collapsed,
	// 		editable,
	// 		onClick,
	// 		onChange,
	// 		disabled,
	// 		children
	// 	} = this.props;

	// 	let selectClassName = `sdc-select ${collapsed ? '' : 'uncollapsed'}`;

	// 	let selectElement;
	// 	if (editable) {
	// 		selectClassName += ' editable';
	// 		// selectElement = (
	// 		// 	<div className='editable-container'>
	// 		// 		<input className={selectClassName} type='text' value={value} placeholder={placeholder} onChange={onChange} />
	// 		// 		<SVGIcon className='editable' name='back' onClick={() => !disabled && onClick && onClick()} />
	// 		// 	</div>
	// 		// );
	// 		selectElement = (
	// 			<div className='editable-wrapper' tabIndex='0'>
	// 				<input className={selectClassName} type='text' value={value} placeholder={placeholder} onChange={onChange} />
	// 				<SVGIcon name='back' onClick={() => !disabled && onClick && onClick()} />
	// 			</div>
	// 		);
	// 	} else {
	// 		if (!value) {
	// 			value = placeholder;
	// 			selectClassName += ' placeholder';
	// 		}
	// 		selectElement = (
	// 			<div className={selectClassName} tabIndex='0' onClick={() => !disabled && onClick && onClick()}>
	// 				<input type='hidden' name={name} value={value} />
	// 				{value}
	// 				<SVGIcon name='back' />
	// 			</div>
	// 		);
	// 	}

	// 	return (
	// 		<div className={`sdc-select-wrapper ${className} ${disabled ? 'disabled' : ''}`}>
	// 			<label className='sdc-select-label'>{label}</label>
	// 			{selectElement}
	// 			{!collapsed &&
	// 				<div className='sdc-select-menu'>
	// 					{children}
	// 				</div>
	// 			}
	// 		</div>
	// 	);
	// }
export default Select;
