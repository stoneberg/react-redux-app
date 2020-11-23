import React, { useState, forwardRef } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import configureStore from './store/configureStore';
import HooksUserContainer from './components/HooksUserContainer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { BounceLoader, BarLoader, BeatLoader, ScaleLoader } from 'react-spinners';
import { css } from '@emotion/react';
import Spinner from './components/spinner/Spinner';
Modal.setAppElement('#root');

const loaderCSS = css`
	margin-top: 25px;
	margin-bottom: 25px;
`;

const CustomToast = (closeToast) => {
	return (
		<div>
			Something went wrong!
			<button onClick={closeToast}>Close</button>
		</div>
	);
};

const ColoredTooltip = () => {
	return <span style={{ color: 'red' }}>Colored</span>;
};

const CustomChild = forwardRef((props, ref) => {
	return (
		<div ref={ref}>
			<div>First Line</div>
			<div>Second Line</div>
		</div>
	);
});

toast.configure();

const store = configureStore();
function App() {
	const notify = () => {
		toast('Basic notification', { position: toast.POSITION.TOP_LEFT });
		toast.success('Success notification!', { position: toast.POSITION.TOP_CENTER, autoClose: 8000 });
		toast.info('Info notification', { position: toast.POSITION.TOP_RIGHT, autoClose: false });
		// toast.warn('Warning notification', { position: toast.POSITION.BOTTOM_LEFT });
		toast.warn(<CustomToast />, { position: toast.POSITION.BOTTOM_LEFT });
		toast.error('Error notification', { position: toast.POSITION.BOTTOM_CENTER });
		toast('Basic notification', { position: toast.POSITION.BOTTOM_RIGHT });
	};
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<Provider store={store}>
			<div className='App'>
				{/* <BounceLoader css={loaderCSS} size={24} color='red' loading />
				<BarLoader css={loaderCSS} size={48} color='orange' loading />
				<BeatLoader css={loaderCSS} size={72} color='maroon' loading />
				<ScaleLoader css={loaderCSS} size={72} color='maroon' loading /> */}
				<HooksUserContainer />
				{/* <UserContainer />
				<ItemContainer cake />
				<ItemContainer />
				<NewCakeContainer />
				<HooksCakeContainer />
				<CakeContainer />
				<IceCreamContainer /> */}
				<button onClick={notify}>Notify!</button>
				<br />
				<Modal
					isOpen={modalOpen}
					shouldCloseOnOverlayClick={false}
					onRequestClose={() => setModalOpen(false)}
					style={{
						overlay: {
							backgroundColor: 'grey',
						},
						content: {
							color: 'orange',
						},
					}}
				>
					<h2>Modal Title</h2>
					<p>Modal Body</p>
					<div>
						<button onClick={() => setModalOpen(false)}>Close</button>
					</div>
				</Modal>
				<button onClick={() => setModalOpen(true)}>Open modal</button>
				<br />
				<div style={{ paddingBottom: '20px' }}>
					<Tippy placement='right' arrow={false} delay={1000} content='Basic Tooltip'>
						<button>Hover</button>
					</Tippy>
				</div>
				<div style={{ paddingBottom: '20px' }}>
					<Tippy content={<span style={{ color: 'yellow' }}>Colored</span>}>
						<button>Hover</button>
					</Tippy>
				</div>
				<div style={{ paddingBottom: '20px' }}>
					<Tippy content={<ColoredTooltip />}>
						<button>Hover</button>
					</Tippy>
				</div>
				<div style={{ paddingBottom: '20px' }}>
					<Tippy placement='top-start' content={<ColoredTooltip />}>
						<CustomChild />
					</Tippy>
				</div>
				<br />
			</div>
		</Provider>
	);
}

export default App;
