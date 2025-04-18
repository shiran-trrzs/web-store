import Banner from './components/Banner';
import ListedProducts from './components/ListedProducts';
import ProductFilters from './components/ProductFilters';
import './styles/style.scss';

function App() {
	return (
		<div className="app-container">
			<Banner />
			<div className="app-layout">
				<aside>
					<ProductFilters />
				</aside>
				<div className="products-container">
					<ListedProducts />
				</div>
			</div>
		</div>
	)
}

export default App;
