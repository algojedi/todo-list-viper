
import React from "react";
import { HeaderProps } from "./Header";

export type HeaderPresenterProps = HeaderProps & {  }

const withPresenter = (
	View: React.FC<HeaderProps>
): React.FC<HeaderPresenterProps> => {
	const Presenter: React.FC<HeaderPresenterProps> = (props) => {
		return <View {...props} />;
	};
	return Presenter;
};

export default withPresenter;