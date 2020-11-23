import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';

export default function MyLoader({ active, children }) {
	return (
		<LoadingOverlay active={active} spinner={<BounceLoader />}>
			{children}
		</LoadingOverlay>
	);
}
