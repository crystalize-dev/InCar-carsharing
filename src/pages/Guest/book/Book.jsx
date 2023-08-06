import React, {useState} from 'react';
import cl from "./Book.module.css"

import Icon from "../../../components/Icon/icon";
import MySelect from "../../../components/Inputs/select/MySelect";
import MyInput from "../../../components/Inputs/input/MyInput";
import {getCar} from "../../../utility/cars";
import CheckBox from "../../../components/Inputs/inputCheckBox/checkBox";


const Book = ({id}) => {
    const [modal, setModal] = useState(null) // modalWindow in #book section
    const [notification, setNotification] = useState("")

    const submitFirst = e => {
        e.preventDefault()
        const formData = new FormData(e.target)

        let car = formData.get('car')
        let pickUp = formData.get('pick-up')
        let dropOf = formData.get('drop-of')
        let pickUpDate = formData.get('pick-up-date')
        let dropOfDate = formData.get('drop-of-date')

        if (!car || !pickUp || !dropOf || !dropOfDate || !pickUpDate) {
            setNotification("All fields required!")
        } else setModal({
            car: car,
            pickUpDate: pickUpDate,
            pickUp: pickUp,
            dropOf: dropOf,
            dropOfDate: dropOfDate
        })
    }

    const submitSecond = e => {
        e.preventDefault()

        setNotification("Check your email to confirm an order!")
        setModal(null)
    }

    return (
        <>
            <section id={id} className={cl.book}>
                <form onSubmit={e => submitFirst(e)}>
                    <h1>Book a car</h1>

                    {notification && <div className={cl.notification}
                                          data-color={notification.indexOf("All") ? "green" : "red"}>{notification}
                        <Icon onClick={() => setNotification("")}>close</Icon></div>}

                    <div className={cl.row}>
                        <div className={cl.bookElem}>
                            <div className={cl.textHeader}>
                                <Icon>directions_car</Icon>
                                <h1>Select Your Car Type <span>*</span></h1>
                            </div>

                            <MySelect name={"car"} defaultValue={"Select your car type"}>
                                <option>Audi A1 S-Line</option>
                                <option>VW Golf 6</option>
                                <option>Toyota Camry</option>
                                <option>BMW 320 ModernLine</option>
                                <option>Mercedes-Benz GLK</option>
                                <option>VW Passat CC</option>
                            </MySelect>
                        </div>
                        <div className={cl.bookElem}>
                            <div className={cl.textHeader}>
                                <Icon>location_on</Icon>
                                <h1> Pick-up <span>*</span></h1>
                            </div>

                            <MySelect name={"pick-up"} defaultValue={"Select pick-up location"}>
                                <option>Moscow</option>
                                <option>Saint Petersburg</option>
                                <option>Tver</option>
                                <option>Volgograd</option>
                                <option>Ekaterinburg</option>
                            </MySelect>
                        </div>
                        <div className={cl.bookElem}>
                            <div className={cl.textHeader}>
                                <Icon>location_on</Icon>
                                <h1> Drop-of <span>*</span></h1>
                            </div>

                            <MySelect name={"drop-of"} defaultValue={"Select drop off location"}>
                                <option>Moscow</option>
                                <option>Saint Petersburg</option>
                                <option>Tver</option>
                                <option>Volgograd</option>
                                <option>Ekaterinburg</option>
                            </MySelect>
                        </div>
                    </div>
                    <div className={cl.row}>
                        <div className={cl.bookElem}>
                            <div className={cl.textHeader}>
                                <Icon>calendar_month</Icon>
                                <h1> Pick-up <span>*</span></h1>
                            </div>

                            <MyInput name={"pick-up-date"} type={"date"}/>
                        </div>
                        <div className={cl.bookElem}>
                            <div className={cl.textHeader}>
                                <Icon>calendar_month</Icon>
                                <h1> Drop-of <span>*</span></h1>
                            </div>

                            <MyInput name={"drop-of-date"} type={"date"}/>
                        </div>
                        <button type={"submit"}>Search</button>
                    </div>
                </form>
            </section>

            {modal && <div className={cl.modalWrapper} onMouseDown={() => setModal(false)}>
                <form className={cl.modalWindow} onMouseDown={e => e.stopPropagation()}
                      onSubmit={e => submitSecond(e)}>
                    <div className={cl.modalHeader}><h1>COMPLETE RESERVATION</h1> <Icon
                        onClick={() => setModal(null)}>close</Icon></div>
                    <div className={cl.modalHeaderNotification}>
                        <h1><Icon>info</Icon>Upon completing this reservation enquiry, you will receive:
                        </h1>
                        <p>Your rental voucher to produce on arrival at the rental desk and a toll-free
                            customer support number.</p>
                    </div>
                    <div className={cl.modalContent}>
                        <div className={cl.preview}>
                            <div className={cl.textBlock}>
                                <h1>Location & Date</h1>
                                <div className={cl.previewElem}>
                                    <div className={cl.elemHeader}>
                                        <Icon>calendar_month</Icon>
                                        <h1>Pick-Up Date & Time</h1>
                                    </div>
                                    <div className={cl.addInfo}>
                                        <p>{modal.pickUpDate} / </p>
                                        <MyInput name={"pickUpTime"} type={"time"}/>
                                    </div>
                                </div>

                                <div className={cl.previewElem}>
                                    <div className={cl.elemHeader}>
                                        <Icon>calendar_month</Icon>
                                        <h1>Drop-Off Date & Time</h1>
                                    </div>
                                    <div className={cl.addInfo}>
                                        <p>{modal.dropOfDate} / </p>
                                        <MyInput name={"dropOfTime"} type={"time"}/>
                                    </div>
                                </div>

                                <div className={cl.previewElem}>
                                    <div className={cl.elemHeader}>
                                        <Icon>location_on</Icon>
                                        <h1>Pick-Up Location</h1>
                                    </div>
                                    <div className={cl.addInfo}>
                                        <p>{modal.pickUp}</p>
                                    </div>
                                </div>

                                <div className={cl.previewElem}>
                                    <div className={cl.elemHeader}>
                                        <Icon>location_on</Icon>
                                        <h1>Drop-Off Location</h1>
                                    </div>
                                    <div className={cl.addInfo}>
                                        <p>{modal.dropOf}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={cl.previewImg}>
                                <h1>Car - <span>{modal.car}</span></h1>
                                <img alt={"car"} src={getCar(modal.car)} draggable={false}/>
                            </div>
                        </div>
                        <div className={cl.personalInfo}>
                            <h1>PERSONAL INFORMATION</h1>
                            <div className={cl.inputs}>
                                <div className={cl.infoElem}>
                                    <h1>First Name <span>*</span></h1>
                                    <MyInput type={"text"} placeholder={"Enter your first name"}/>
                                </div>
                                <div className={cl.infoElem}>
                                    <h1>Last Name <span>*</span></h1>
                                    <MyInput type={"text"} placeholder={"Enter your last name"}/>
                                </div>
                                <div className={cl.infoElem}>
                                    <h1>Age <span>*</span></h1>
                                    <MyInput type={"number"} placeholder={"18"}/>
                                </div>
                                <div className={cl.infoElem}>
                                    <h1>Phone Number <span>*</span></h1>
                                    <MyInput type={"text"} placeholder={"Enter your phone number"}/>
                                </div>
                                <div className={cl.infoElem}>
                                    <h1>Email <span>*</span></h1>
                                    <MyInput type={"email"} placeholder={"Enter your email address"}/>
                                </div>
                                <div className={cl.infoElem}>
                                    <h1>City <span>*</span></h1>
                                    <MyInput type={"text"} placeholder={"Enter your city"}/>
                                </div>
                                <div className={cl.infoElem}>
                                    <h1>Address <span>*</span></h1>
                                    <MyInput type={"text"} placeholder={"Enter your street address"}/>
                                </div>
                                <div className={cl.infoElem}>
                                    <h1>Zip Code <span>*</span></h1>
                                    <MyInput type={"text"} placeholder={"Enter your zip code"}/>
                                </div>
                            </div>
                            <div className={cl.submit}>
                                <CheckBox text={"Please send me latest news and updates"}
                                          id={"checkbox"}
                                          name={"notify"}/>
                                <button>Reserve Now</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>}
        </>
    );
};

export default Book;