import React, { useEffect, useState } from 'react'
import "./About.css"
import CustomerReview from '../Home/Components/CustomerReview'
import AdvantageBlock from '../Components/AdvantageBlock'
import twoMechanics from "../Images/twoMechanics.jpg"
import alignment from "../Images/alignment.jpg"
import alternator from "../Images/alternator.jpg"
import autoBody from "../Images/autoBody.jpg"
import axle from "../Images/axle.jpg"
import battery from "../Images/battery.jpg"
import belts from "../Images/belts.jpg"
import brakes from "../Images/brakes.jpg"
import fuelPumpImage from "../Images/fuelPumpImage.jpg"
import serviceEngineSoon from "../Images/serviceEngineSoon.jpg"
import emissionTesting from "../Images/emissoinTesting.jpg"

/*
    display state variables for text and images
    menu to the left changes the state 
*/
function About({startingPage}) {

    const [selectedServiceName, setSelectedServiceName] = useState(startingPage || "About")
    const [image, setImage] = useState(twoMechanics)
    const [content, setContent] = useState(twoMechanics)

    const reviewArray = [
        {
            stars: 5,
            name: "Phillip Terry",
            review: "Good service, good guys, good mechanics, fair pricing, no gouging or up selling. If they find other things your car needs they're doing their jobs as mechanics and maintenance experts! It's your call whether to get it done. These guys know and love cars, so do I. Been taking our cars there for many years, have confidence in their work and their character."
        },
        {
            stars: 5,
            name: "Betty Rivera",
            review: "Very professional, and my vehicle was completed in a timely fashion. They honored their time commitment . I highly recommend them to anyone that is looking for honest, and professional services."
        },
        {
            stars: 5,
            name: "Kay Keneetit",
            review: "I came to Ocala from a small Midwestern town, so I was really worried when it came to finding a place to take my car that I could trust. I found that place! The owners at Ocala Auto Care are honest and kind; they do not try to sell things you don't need. Their mechanics are just like that, too. If your timing is right, it may be the fastest oil change you ever seen. They keep good records of your service history; I would never take my car anywhere else for an inspection, either. You will be happy with Ocala Auto Care, I promise!"
        },
        {
            stars: 5,
            name: "Jason Kalka",
            review: "These guys are great, always friendly and knowledgeable, with prompt service."
        },
        {
            stars: 5,
            name: "J Clubfit",
            review: "Dave and Rod are the best. They operate a great store. I've trusted them now for years. The are really good people and I get a fair and honest deal. I trust them and they came with trusted referrals."
        },
        {
            stars: 5,
            name: "Sam Haynes",
            review: "I've used Ocala Auto Care for years and would never take my car to anyone else. Rod and Dave are the best."
        },        
    ]

    useEffect(()=>{
        createServicesArray()
    },[])

    useEffect(()=>{
        setValues()
    },[selectedServiceName])

    let nameImages = {
        "About": twoMechanics,        
        "Alignment" : alignment,
        "Alternator": alternator,
        "Auto Body Repair": autoBody,
        "Axle Replacement": axle,
        "Battery": battery,
        "Belts": belts,
        "Brakes": brakes,
        "Maintance": fuelPumpImage,
        "Check Engine": serviceEngineSoon,
        "Certifications": emissionTesting,
    }

    const [servicesArray, setServicesArray] = useState([])
    function createServicesArray(){
        let serviccesString = `
            About
            All Services
            Alignment
            Alternator
            Auto Body Repair
            Axle Replacement
            Battery
            Belts
            Brakes
            Maintance
            Check Engine
            Certifications
            `
        //     Check Engine Light
        //     Climate Control/AC/Heat
        //     Diagnostics
        //     Electrical
        //     Filters
        //     Fuel and Engine Management
        //     Hard Starting
        //     Headlamps
        //     Oil Changes
        //     Powertrain Systems
        //     Ride and Handling
        //     Timing Belt
        //     Water Pump Replacement
        // `
        let servicesArray = serviccesString.split("\n")
        let tempArray = []
        servicesArray.forEach(string => {
            let tempString = string.replaceAll("  ", "")
            if(tempString !== "")
                tempArray.push(tempString)         
        })
        setServicesArray(tempArray)
    }

    function setValues(){
        if(selectedServiceName === "About"){
            setImage(twoMechanics)
            setContent(
                <>
                    <h3>Ocala Auto Care is a full service auto repair and auto body shop in Ocala serving all domestic and import cars, trucks and SUVs. Locally owned and operated since 1976 Ocala Auto Care has become a community favorite for all auto repair and preventative maintenance needs.</h3>
                    <p>Our ASE certified technicians perform brake repair, engine diagnostics and repair, cooling system repairs and so much more to keep your vehicle running smooth. When you're in need of expert vehicle service in Ocala you can trust the professional and friendly team at Ocala Auto Care. Give us a call today at (352) 469 - 6049 to request a quote or schedule an appointment for quality auto repair in Ocala!</p>
                    <p>At Ocala Auto Care there is no job that our skilled mechanics can't handle. We perform everything from routine maintenance such as oil changes, filter replacements and factory scheduled maintenance to complex brake repair, axle replacement, fuel system service and engine repair. When you need auto repair in Ocala for any import or domestic vehicle, or for your business fleet, we have you covered!</p>                
                    <p>If you're car is becoming hard to start, rides a little rough or the power windows are stuck down, bring it in so we can diagnose the problem at our state of the art repair facility. We use the latest technology to identify and repair vehicle issues and ensure that your car is in good health and getting excellent fuel efficiency. All parts and labor from our shop comes with a 12 month/12,000 mile warranty so you can rest assured you're getting excellent service at a great price. Call Ocala Auto Care at (352) 469 - 60493 to schedule an appointment for auto maintenance or auto repair in Ocala today!</p>
                    <h3>Contact us today at Contact@OcalaAutoCare.com</h3>
                </>
            )
        }
        else if(selectedServiceName === "Contact"){
            setImage(twoMechanics)
            setContent(
                <>              
                    {/* <div className='spacer'></div>    */}
                    <div className='center'>
                        <h3>Contact us today: </h3>
                        <h3>Email</h3>
                        <a href="mailto:Contact@OcalaAutoCare.com" className='contactLink'>Contact@OcalaAutoCare.com</a>
                        <h3>Phone</h3>
                        <a className='contactLink'>(352) 469 - 6049</a>
                        <p></p>
                        <div>Please include some information about how we can help you.</div>
                        <div>We will get back to you as soon as possible</div>
                        <p></p>
                        {/* <div>At Ocala Auto Care there is no job that our skilled mechanics can't handle. We perform everything from routine maintenance such as oil changes, filter replacements and factory scheduled maintenance to complex brake repair, axle replacement, fuel system service and engine repair. When you need auto repair in Ocala for any import or domestic vehicle, or for your business fleet, we have you covered!</div>                 */}
                    </div>   
                </>
            )
        }
        else if(selectedServiceName === "All Services"){
            setImage(null)
            setContent(
                <div className='allServicesBox'>
                    {Object.entries(nameImages).map(([name, image]) => (
                        <div className='serviceBlock' onClick={()=>setSelectedServiceName(name)}>
                            <img src={image}></img>
                            <h3>
                                {name}
                            </h3>
                        </div>
                    ))}
                </div>
            )
        }
        else if(selectedServiceName === "Reviews"){
            setImage(null)
            setContent(
                <>
                    {reviewArray.map((reviewData) => (
                        <CustomerReview
                            stars={reviewData.stars}                        
                            name={reviewData.name}                        
                            review={reviewData.review}                        
                        ></CustomerReview>

                    ))}
                </>
            )
        }
        else if(selectedServiceName === "Alignment"){
            setImage(alignment)
            setContent(
                <>
                    <h3>To track properly down the road, your wheels and tires must be pointing in the same direction. This is called alignment. To be able to turn, and move properly over bumps and dips in the road, the wheels and tires work with the suspension, and have certain angles and measurements “built in” by the manufacturer for best handling and overall driving comfort. If your wheels are not set to these precise measurements, excessive tire wear and poor handling will result.</h3>
                    <h2>4 Wheel Alignment</h2>
                    <p>Most cars today require 4-wheel alignment, which can best be achieved on a laser alignment rack. It’s important to have your wheels aligned whenever you have new tires installed, as they will move your wheels “out-of-spec” just by being new! Potholes, speedbumps, dirt roads or even snow berms can tweak your wheels out of alignment, so whenever you’ve put your vehicle through a few uncomfortable bumps or bounces, you’ll want to make sure your alignment is still within specification.</p>
                    <h2>Alignment Symptoms</h2>
                    <p>Failing suspension components can also affect alignment, but the symptoms will be different…mostly the vehicle will pull to one side, or the steering wheel might be off-center. Abnormal tire wear is also an indicator of bad steering parts and out of spec alignment. A vibration, or a sound that increases in pitch as your speed increases is usually an indicator of a tire issue, which can also lead to an alignment problem.</p>                    
                    <p>Whatever symptom you experience, bring your vehicle in at once to minimize the potential damage to other systems. We’ll inspect your car, and if there’s any needed repairs we’ll give you an estimate. It might just be that an alignment is required to get it back into spec. We’ll give your vehicle the best of care, and get you quickly down the road again!</p>                    
                    <p>At Ocala Auto Care, your complete automotive care center in Ocala, FL we install only quality replacement parts. Give us a call and let us help keep you safely and economically on the road. We serve Ocala and the surrounding areas.</p>                    
                </>
            )
        }
        else if(selectedServiceName === "Alternator"){
            setImage(alternator)
            setContent(
                <>
                    <h3>Your vehicle’s ALTERNATOR is the heart of the electrical system. Like a human heart, it “pumps” electrical energy into the battery for use on an as-needed basis by your engine, chassis, or interior cabin. Proper operation is vital, as once it becomes faulty your battery will not be receiving energy and will eventually stop powering your electrical devices. A bad alternator can even damage other components including the battery, your vehicle’s various computers, and more. Also, since the serpentine belt must be removed when testing or replacing an alternator, it’s good practice to inspect, and usually replace the belt at that time. So, whenever you have an electrical issue, come in and see us. We get a charge out of getting you back on the road safely and quickly!</h3>
                    <h2>Friendly staff and professional technicians</h2>
                    <p>We at Ocala Auto Care want to be your first and only choice for auto and truck maintenance and repair services. Our friendly staff and professional technicians are here to do everything possible to meet and exceed your car service expectations! We know you must trust your car or truck to get you and your family from place to place safely, and we want you to know that we’ll treat your vehicle with the same care as if it were our own.</p>
                    <h2>Quality replacement parts</h2>
                    <p>Using only the highest quality replacement parts, we take pride in our work because we know our reputation is critical to our success. Please let us know how we’re doing! Feel free to call or stop by at any time and let us know how you feel about the services we’ve done for you. Even though you may first find us as a new customer, we hope you’ll drive away satisfied and happy to refer us to your friends!</p>                    
                    <p>I want to hear from you if you have any questions, or are not satisfied with any part of the service experience. Please call me at (352) 469 - 60493 if you need an appointment, or to let me know about the quality of your experience. It’s my goal and responsibility to provide you with the very best service and vehicle care possible!</p>                    
                    <p>At Ocala Auto Care, your complete automotive care center in Ocala, FL we install only quality replacement parts. Give us a call and let us help keep you safely and economically on the road. We serve Ocala and the surrounding areas.</p>                    
                </>
            )
        }
        else if(selectedServiceName === "Auto Body Repair"){
            setImage(autoBody)
            setContent(
                <>
                    <p>Using the latest automotive technology, our technicians bring crunched fenders, broken windshields, bent frames and dented doors back to life. When you contact Ocala Auto Care our team will help you every step of the way.</p>                    
                    <p>We combine years of automotive body repair experience with state-of-the-art collision and service repair facilities to ensure total customer satisfaction. We will work with your auto insurance company to make sure the claim is handled efficiently.</p>                    
                    <p>At Ocala Auto Care, your complete automotive care center in Ocala, FL we install only quality replacement parts. Give us a call and let us help keep you safely and economically on the road. We serve Ocala and the surrounding areas.</p>                    
                </>
            )
        }
        else if(selectedServiceName === "Axle Replacement"){
            setImage(axle)
            setContent(
                <>
                    <h3>AXLES transmit the power of your engine to the drive wheels. They are usually set into the transaxle on a front-wheel drive vehicle, or into a differential if the vehicle is rear wheel drive. Modern all-wheel drive vehicles will typically use both.</h3>
                    <h3>Axle issues usually become noticeable due to vibration, noise, or gear oil at either end of the axle itself. If an axle fails at speed, it can be extremely dangerous, even life-threatening. Noise that increases with the speed of the vehicle can also be an axle bearing being damaged by a lack of lubrication. If you have any of the symptoms of impending axle failure, get your vehicle serviced immediately, and it would be wise to have it towed in to us for immediate inspection.</h3>

                    <h2>We will meet and exceed your car or truck service expectations</h2>
                    <p>We at Ocala Auto Care want to be your first and only choice for auto and truck maintenance and repair services. Our friendly staff and professional technicians are here to do everything possible to meet and exceed your truck service expectations! We know you must trust your car or truck to get you and your family from place to place safely, and we want you to know that we’ll treat your vehicle with the same care as if it were our own.</p>
                    <p>Using only the highest quality replacement parts, we take pride in our work because we know our reputation is critical to our success. Please let us know how we’re doing! Feel free to call or stop by at any time and let us know how you feel about the services we’ve done for you. Even though you may first find us as a new customer, we hope you’ll drive away satisfied and happy to refer us to your friends!</p>
                    <p>At Ocala Auto Care, your complete automotive care center in Ocala, FL we install only quality replacement parts. Give us a call and let us help keep you safely and economically on the road. We serve Ocala and the surrounding areas.</p>
                </>
            )
        }
        else if(selectedServiceName === "Battery"){
            setImage(battery)
            setContent(
                <>
                    <h3>Your battery stores and distributes electrical power to the various needed locations throughout your vehicle. It is filled with a reactive chemical and lead plates, making it a very heavy item. Most are located under the hood with the engine, but automakers today are changing locations to get this heavy item as low in the vehicle as possible. As such, some are located in the trunk, under the rear seat, or even below the trunk floor.</h3>
                    <h3>The battery powers your computers, lighting, instrumentation, transmission shifting, engine sensors, even power steering on newer vehicles. A well-functioning battery is critical to allowing the other systems in your vehicle to operate properly.</h3>

                    <h2>Avoid the possibility of explosion</h2>
                    <p>Batteries are a dangerous part to work with, as they have a high amperage charge when operating correctly. They also can emit small quantities of an explosive gas, so handling a battery in any situation is best left to professionals who know the danger and take care to avoid the possibility of explosion.</p>
                    <p>We at Ocala Auto Care want to be your first and only choice for auto and truck maintenance and repair services. Our friendly staff and professional technicians are here to do everything possible to meet and exceed your car service expectations! We know you must trust your car or truck to get you and your family from place to place safely, and we want you to know that we’ll treat your vehicle with the same care as if it were our own.</p>
                    <p>Using only the highest quality replacement parts, we take pride in our work because we know our reputation is critical to our success. Please let us know how we’re doing! Feel free to call or stop by at any time and let us know how you feel about the services we’ve done for you. Even though you may first find us as a new customer, we hope you’ll drive away satisfied and happy to refer us to your friends!</p>
                    <p>At Ocala Auto Care, your complete automotive care center in Ocala, FL we install only quality replacement parts. Give us a call and let us help keep you safely and economically on the road. We serve Ocala and the surrounding areas.</p>
                </>
            )
        }
        else if(selectedServiceName === "Belts"){
            setImage(belts)
            setContent(
                <p>
                    <h3>Your vehicle may have a single engine drive belt (called a SERPENTINE), or it may use several belts if it’s an older car or truck. These drive belts roll over pulleys which turn and generate rotational energy into each accessory attached to your engine. They typically drive the alternator, the water pump, air conditioning, power steering, and even the power brakes on some larger vehicles.</h3>
                    <h2>Examine your belts at every service opportunity</h2>
                    <p>If you have a serpentine belt, the loss of this belt means the car will either overheat or lose electrical power quickly, and you may be stranded unexpectedly.  These belts are made of rubber compounds and can stretch, crack, or be damaged by contact with chemicals.  It is imperative to examine your belts at every service opportunity, to be certain that every engine system using that belt can continue to operate effectively.</p>
                    <p>We at Ocala Auto Care want to be your first and only choice for auto and truck maintenance and repair services. Our friendly staff and professional technicians are here to do everything possible to meet and exceed your car service expectations! We know you must trust your car or truck to get you and your family from place to place safely, and we want you to know that we’ll treat your vehicle with the same care as if it were our own.</p>
                    <p>Using only the highest quality replacement parts, we take pride in our work because we know our reputation is critical to our success. Please let us know how we’re doing! Feel free to call or stop by at any time and let us know how you feel about the services we’ve done for you. Even though you may first find us as a new customer, we hope you’ll drive away satisfied and happy to refer us to your friends!</p>
                    <p>At Ocala Auto Care, your complete automotive care center in Ocala, FL we install only quality replacement parts. Give us a call and let us help keep you safely and economically on the road. We serve Ocala and the surrounding areas.</p>
                </p>
            )
        }
        else if(selectedServiceName === "Brakes"){
            setImage(brakes)
            setContent(
                <>
                    <h3>We have our vehicles so we can jump in and go somewhere...but once we get close, it’s important to STOP there! Your brakes are located on each wheel, and they use friction to slow the rotational energy of the wheels so you can slow down and stop where desired. They are complex systems using hydraulic fluid, mechanical parts, computer controls, friction material, and electrical sensors. Some systems on Hybrid vehicles also use generators on each wheel to put power back into the battery pack when slowing the vehicle to a stop.</h3>
                    <h3>Brake pads and rotors take a massive amount of abuse, as they are the main component that turns the rotational energy into heat. This means that these parts are designed to wear out over time, so it’s important to inspect your brakes regularly…usually at every tire rotation or anytime the wheels of your vehicle are removed.</h3>
                    <h2>Thorough inspection</h2>
                    <p>All modern cars today are required to have “anti-lock” brakes, so there is a computer in the system with sensors to modulate stopping power at each wheel. A thorough inspection will also include looking at the sensors and diagnostics of the entire system to be certain the brakes are working properly.</p>
                    <p>If you suspect a brake issue...STOP!! A faulty braking system can be extremely dangerous, not only to you, but to others on the road as well. Call us and discuss your issue with one of our knowledgeable consultants, and if inspection and repair are needed, have the car towed or flat bedded in.</p>
                    <p>The safety of your vehicle for you and your family is our number 1 concern, so when it comes to brake issues, we’ll stop at nothing to be sure your braking system is working effectively.</p>

                    <h2>We want to be your first and only choice</h2>
                    <p>We at Ocala Auto Care want to be your first and only choice for auto and truck maintenance and repair services. Our friendly staff and professional technicians are here to do everything possible to meet and exceed your car service expectations! We know you must trust your car or truck to get you and your family from place to place safely, and we want you to know that we’ll treat your vehicle with the same care as if it were our own.</p>
                    <p>Using only the highest quality replacement parts, we take pride in our work because we know our reputation is critical to our success. Please let us know how we’re doing! Feel free to call or stop by at any time and let us know how you feel about the services we’ve done for you. Even though you may first find us as a new customer, we hope you’ll drive away satisfied and happy to refer us to your friends!</p>
                    <p>At Ocala Auto Care, your complete automotive care center in Ocala, FL we install only quality replacement parts. Give us a call and let us help keep you safely and economically on the road. We serve Ocala and the surrounding areas.</p>
                </>
            )
        }
        else if(selectedServiceName === "Maintance"){
            setImage(fuelPumpImage)
            setContent(
                <>
                    <p>
                        Engine operation management requires the input of a few systems working together. The filtered air of the inductions system, the fuel delivered to each cylinder, and the emissions system all feed information to the ECM (or PCM) and the computer calculates the proper amount of fuel for each running condition. Being a computer, it can measure and correct parameters like the air/fuel ratio thousands of times per minute! It also takes input from the electrical system in determining load and how much timing advance the engine requires for optimum operation.
                    </p>
                    <h2>
                        Regular maintenance & Certificaions
                    </h2>
                    <p>
                        This is why it is so important to have regular maintenance on your vehicle. All of these systems work together to give input to a computer that determines the preferred running condition of the engine, moving the vehicle down the road safely and efficiently.
                        We can perform a battery of tests To ensure your systems and emissions are all within nominal ranges.
                    </p>
                    <p>
                        Occasionally an ECM will actually malfunction, but this is something that can be discovered during diagnostic testing. Vehicles have a variety of ECMs available, so it’s important to have one of our service advisors find the right unit for you.
                    </p>
                </>
            )
        }
        else if(selectedServiceName === "Check Engine"){
            setImage(serviceEngineSoon)
            setContent(
                <>
                    <p>
                        Your “Check Engine Light” is simply a warning light that has received information from a sensor connected to your vehicle’s ECM, or “engine control module”. It can be an indicator of needed maintenance, or it could also be warning you of a major component failure.
                        Each sensor connected to the ECM will register a code within the ECM that tells technicians the nature of the item needing service or replacement. While reading these codes is a fairly simple operation, it requires very expensive equipment, and many years of experience to understand exactly what is causing the trouble code to appear.                    
                    </p>
                    <h2>
                        Serious and expensive damage
                    </h2>
                    <p>
                        This is why it is so important to have regular maintenance on your vehicle. All of these systems work together to give input to a computer that determines the preferred running condition of the engine, moving the vehicle down the road safely and efficiently.
                        We can perform a battery of tests To ensure your systems and emissions are all within nominal ranges.
                    </p>
                    <p>
                        Occasionally an ECM will actually malfunction, but this is something that can be discovered during diagnostic testing. Vehicles have a variety of ECMs available, so it’s important to have one of our service advisors find the right unit for you.
                    </p>
                </>
            )
        }
        else if(selectedServiceName === "Certifications"){
            setImage(emissionTesting)
            setContent(
                <>
                    <h2>
                        Smog Tests and Emission Checks in Florida
                    </h2>
                    <p>
                        If you own a car, naturally you have to be concerned about the pollution it emits. You want the convenience of driving place to place, but you also don’t want to be polluting the air, and destroying the ozone layer, do you? That’s why states initially set up smog and emissions protocols, to ensure that Florida’s drivers weren’t adversely affecting the near-tropical climate and environment that Florida is famous for.                    </p>
                    <h2>
                        Florida Smog and Emissions Laws
                    </h2>
                    <p>
                        For a few years, Florida had auto emissions test requirements, but they were eventually abolished. This is (presumably) due to several factors. First, it was a hot-button political issue within the state, for both Florida residents and legislators. And second, there were several Florida counties that allegedly offered such clean air readings that the tests were rendered obsolete. If you just recently got your Florida drivers license, though, you have nothing to worry about.
                    </p>
                    <h2>
                        Low Emission Rewards in Florida
                    </h2>
                    <p>
                        Even though there are no more mandatory smog checks in Florida, the state does offer rewards to drivers who opt for hybrid cars, and other environmentally friendly vehicles. If you purchase a vehicle that is certified by the Environmental Protection Agency (EPA) as “Inherently Low Emissions Vehicle” (ILEV), you are allowed to drive in the High-Occupancy Vehicle (HOV) lane at all times, regardless of how many passengers you have in your car.
                    </p>
                </>
            )
        }
        else{
            setContent(
                <>
                    <p>Our ASE certified technicians perform brake repair, engine diagnostics and repair, cooling system repairs and so much more to keep your vehicle running smooth. When you're in need of expert vehicle service in Ocala you can trust the professional and friendly team at Ocala Auto Care. Give us a call today at (352) 469 - 60493 to request a quote or schedule an appointment for quality auto repair in Ocala!</p>
                    <p>At Ocala Auto Care there is no job that our skilled mechanics can't handle. We perform everything from routine maintenance such as oil changes, filter replacements and factory scheduled maintenance to complex brake repair, axle replacement, fuel system service and engine repair. When you need auto repair in Ocala for any import or domestic vehicle, or for your business fleet, we have you covered!</p>                
                    <p>If you're car is becoming hard to start, rides a little rough or the power windows are stuck down, bring it in so we can diagnose the problem at our state of the art repair facility. We use the latest technology to identify and repair vehicle issues and ensure that your car is in good health and getting excellent fuel efficiency. All parts and labor from our shop comes with a 12 month/12,000 mile warranty so you can rest assured you're getting excellent service at a great price. Call Ocala Auto Care at (352) 469 - 60493 to schedule an appointment for auto maintenance or auto repair in Ocala today!</p>
                </>
            )
        }
    }

  return (
    <div className='pageOuter'>
        <div className='pageInner'>
            <h1>{selectedServiceName}</h1>
            <hr></hr>
            <div className='aboutSide '>
                {servicesArray.map(serviceName => (
                    <div 
                        className={'sideButton ' + ((selectedServiceName === serviceName) && " sideButtonSelected")}
                        onClick={()=>setSelectedServiceName(serviceName)}
                    >{serviceName}</div>
                ))}
            </div>
            <div className='aboutContent center'>
                {image && <img className={'aboutContentImg '+(selectedServiceName === "Contact"?" aboutCenteredImage":"")} src={image}></img>}
                <p className='aboutDescriptionText'>
                    {content}
                </p>    
                <AdvantageBlock></AdvantageBlock>            
            </div>
        </div>    
    </div>
  )
}

export default About