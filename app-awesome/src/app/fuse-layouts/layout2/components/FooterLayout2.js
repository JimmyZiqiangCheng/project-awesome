import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFooterTheme } from 'app/store/fuse/settingsSlice';

function FooterLayout2(props) {
	const footerTheme = useSelector(selectFooterTheme);

	return <div>awesome footer</div>;
}

export default memo(FooterLayout2);
