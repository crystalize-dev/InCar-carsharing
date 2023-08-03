import React, {useState} from 'react';
import cl from "./Faq.module.css"
import MySection from "../../../components/section/MySection";
import Icon from "../../../components/Icon/icon";
import classnames from "classnames";


const Faq = ({id}) => {
    const [active, setActive] = useState(null)

    const changeActive = (option) => {
        if (active === option) setActive(null)
        else setActive(option)
    }

    return (
        <MySection id={id} className={cl.faq}>
            <div className={cl.container}>
                <h2>FAQ</h2>
                <h1>Frequently Asked Questions</h1>
                <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers
                    to Common Concerns and Inquiries.</p>

                <div className={cl.questions}>
                    <div className={active === "option1" ? classnames(cl.option, cl.active) : cl.option}
                         onClick={() => changeActive("option1")}>
                        <p>1. What is special about comparing rental car deals?</p>
                        <Icon>expand_more</Icon>
                    </div>
                    <div className={active === "option1" ? classnames(cl.expand, cl.expandShow) : cl.expand}>
                        <p>Comparing rental car deals is important as it helps find the best deal that fits your budget
                            and
                            requirements, ensuring you get the most value for your money. By comparing various options,
                            you can
                            find deals that offer lower prices, additional services, or better car models. You can find
                            car
                            rental deals by researching online and comparing prices from different rental companies.</p>
                    </div>

                    <div className={active === "option2" ? classnames(cl.option, cl.active) : cl.option}
                         onClick={() => changeActive("option2")}>
                        <p>2. How do I find the car rental deals?</p>
                        <Icon>expand_more</Icon>
                    </div>
                    <div className={active === "option2" ? classnames(cl.expand, cl.expandShow) : cl.expand}>
                        <p>You can find car rental deals by researching online and comparing prices from different
                            rental
                            companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and
                            view
                            available rental options. It is also recommended to sign up for email newsletters and follow
                            rental
                            car companies on social media to be informed of any special deals or promotions.</p>
                    </div>

                    <div className={active === "option3" ? classnames(cl.option, cl.active) : cl.option}
                         onClick={() => changeActive("option3")}>
                        <p>3. How do I find such low rental car prices?</p>
                        <Icon>expand_more</Icon>
                    </div>
                    <div className={active === "option3" ? classnames(cl.expand, cl.expandShow) : cl.expand}>
                        <p>Book in advance: Booking your rental car ahead of time can often result in lower prices.
                            Compare
                            prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare
                            prices
                            from multiple rental car companies. Look for discount codes and coupons: Search for discount
                            codes
                            and coupons that you can use to lower the rental price. Renting from an off-airport location
                            can
                            sometimes result in lower prices.</p>
                    </div>
                </div>
            </div>
        </MySection>
    );
};

export default Faq;