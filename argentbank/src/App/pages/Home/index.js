import { Banner } from "../../features/components/Banner";
import { Feature } from "../../features/components/Feature";

import './style.css'


export const Home = () => {


    return (

            <main className="main-container-home">
                    <Banner
                        p_1="No fees."
                        p_2="No minimum deposit."
                        p_3="High interest rates."
                        text="Open a savings account with Argent Bank today!"
                        />

                <section className="feature-container">
                    <h2 className="sr-only">Features</h2>
                    <Feature
                        imageSrc="images/icon-chat.png"
                        title="You are our #1 priority"
                        content="Need to talk to a representative ? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                    />
                    <Feature
                        imageSrc="images/icon-money.png"
                        title="More savings means higher rates"
                        content="The more you save with us, the higher your interest rate will be!" />
                    <Feature
                        imageSrc="images/icon-security.png"
                        title="Security you can trust"
                        content="We use top of the line encryption to make sure your data and money is always safe." />
                </section>
            </main>
    )
}