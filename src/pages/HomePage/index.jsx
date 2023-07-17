import MainTemplate from '../../components/templates/MainTemplate.jsx';
import ContainerProducts from '../../components/molecules/ContainerMenuItems.jsx';
import burgers from '../../utils/burgers.js';
import drinks from '../../utils/drinks.js';
import ProductItem from '../../components/molecules/ProductItem.jsx';
import { useNavigate } from 'react-router-dom';


export default function HomePage() {
    const navigate = useNavigate();
    const premiums = burgers.filter(b => b.type === "premium" && b);
    const smashes = burgers.filter(b => b.type === "smashes" && b);
    const classics = burgers.filter(b => b.type === "classic" && b);
    const tradicionals = burgers.filter(b => b.type === "tradicional" && b);

    return (
        <MainTemplate textFooterButton="Carrinho" onClickFooterButton={() => navigate("/carrinho")}>
            <ContainerProducts title="Premiums......................" subtitle="Artesanais..................................">
                {premiums.map(b => (
                    <ProductItem key={b.name} item={b} />
                ))}
            </ContainerProducts>
            <ContainerProducts title="Smashes........................" subtitle="Artesanais..................................">
                {smashes.map(b => (
                    <ProductItem key={b.name} item={b} />
                ))}
            </ContainerProducts>
            <ContainerProducts title="Classics........................." subtitle="Artesanais..................................">
                {classics.map(b => (
                    <ProductItem key={b.name} item={b} />
                ))}
            </ContainerProducts>
            <ContainerProducts title="Tradicionais..................." subtitle="">
                {tradicionals.map(b => (
                    <ProductItem key={b.name} item={b} />
                ))}
            </ContainerProducts>
            <ContainerProducts title="Bebidas........................." subtitle="" isBurger={false}>
                {drinks.map(b => (
                    <ProductItem key={b.name} item={b} />
                ))}
            </ContainerProducts>
        </MainTemplate>
    );
}
