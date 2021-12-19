
import React from "react";
import { HeaderProps, defaultProps } from "./Header";

export type HeaderPresenterProps = HeaderProps & {  }

const withPresenter = (
	View: React.FC<HeaderProps>
): React.FC<HeaderPresenterProps> => {
	const Presenter: React.FC<HeaderPresenterProps> = (props) => {
		const blockProps: HeaderProps = {
			...defaultProps,
			title: {
				...defaultProps.title,
				value: 'The Todo App with Viper'
			}
		};
		return <View {...blockProps} />;
	};
	return Presenter;
};

export default withPresenter;