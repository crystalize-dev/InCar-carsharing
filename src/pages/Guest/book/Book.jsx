import React, {useEffect, useState} from 'react';
import {useTranslation, useTranslationChange} from "i18nano";
import cl from "./Book.module.css"

import Icon from "../../../components/Icon/icon";
import MySelect from "../../../components/Inputs/select/MySelect";
import MyInput from "../../../components/Inputs/input/MyInput";
import {getCar} from "../../../utility/cars";
import CheckBox from "../../../components/Inputs/inputCheckBox/checkBox";


const Book = ({id}) => {
    const [modal, setModal] = useState(null) // modalWindow in #book section
    const [notification, setNotification] = useState("")

    const text = useTranslation()
    const lang = useTranslationChange().lang

    const submitFirst = e => {
        e.preventDefault()
        const formData = new FormData(e.target)

        let car = formData.get('car')
        let pickUp = formData.get('pick-up')
        let dropOf = formData.get('drop-of')
        let pickUpDate = formData.get('pick-up-date')
        let dropOfDate = formData.get('drop-of-date')

        if (!car || !pickUp || !dropOf || !dropOfDate || !pickUpDate) {
            setNotification(text('book.notification.fields'))
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

        setNotification(text('book.notification.complete'))
        setModal(null)
    }

    useEffect(() => {
        setNotification("")
    }, [lang])

    return (
        <>
            <section id={id} className={cl.book}>
                <form onSubmit={e => submitFirst(e)}>
                    <h1>{text('book.header')}</h1>

                    {notification &&
                        <div className={cl.notification}
                                          data-color={notification.indexOf(text('book.notification.check')) ? "green" : "red"}>
                            {notification}
                            <Icon onClick={() => setNotification("")}>close</Icon>
                        </div>}

                    <div className={cl.row}>
                        <div className={cl.bookElem}>
                            <div className={cl.textHeader}>
                                <Icon>directions_car</Icon>
                                <h1>{text('book.choose')}<span>*</span></h1>
                            </div>

                            <MySelect name={"car"} defaultValue={text('book.choose')}>
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
                                <h1> {text('book.pickup')} <span>*</span></h1>
                            </div>

                            <MySelect name={"pick-up"} defaultValue={text('book.pickup.select')}>
                                <option>{text('moscow')}</option>
                                <option>{text('spb')}</option>
                                <option>{text('tver')}</option>
                                <option>{text('volg')}</option>
                                <option>{text('ekb')}</option>
                            </MySelect>
                        </div>
                        <div className={cl.bookElem}>
                            <div className={cl.textHeader}>
                                <Icon>location_on</Icon>
                                <h1> {text('book.drop-off')} <span>*</span></h1>
                            </div>

                            <MySelect name={"drop-of"} defaultValue={text("book.drop-off.select")}>
                                <option>{text('moscow')}</option>
                                <option>{text('spb')}</option>
                                <option>{text('tver')}</option>
                                <option>{text('volg')}</option>
                                <option>{text('ekb')}</option>
                            </MySelect>
                        </div>
                    </div>
                    <div className={cl.row}>
                        <div className={cl.bookElem}>
                            <div className={cl.textHeader}>
                                <Icon>calendar_month</Icon>
                                <h1> {text('book.pickup.date')}<span>*</span></h1>
                            </div>

                            <MyInput name={"pick-up-date"} type={"date"} />
                        </div>
                        <div className={cl.bookElem}>
                            <div className={cl.textHeader}>
                                <Icon>calendar_month</Icon>
                                <h1>{text('book.drop-off.date')}<span>*</span></h1>
                            </div>

                            <MyInput name={"drop-of-date"} type={"date"}/>
                        </div>
                        <button type={"submit"}>{text('book.search')}</button>
                    </div>
                </form>
            </section>

            {modal && <div className={cl.modalWrapper} onMouseDown={() => setModal(false)}>
                <form className={cl.modalWindow} onMouseDown={e => e.stopPropagation()}
                      onSubmit={e => submitSecond(e)}>
                    <div className={cl.modalHeader}><h1>{text('book.modal.header')}</h1> <Icon
                        onClick={() => setModal(null)}>close</Icon></div>
                    <div className={cl.modalHeaderNotification}>
                        <h1><Icon>info</Icon>{text('book.modal.info.h1')}</h1>
                        <p>{text('book.modal.info.p')}</p>
                    </div>
                    <div className={cl.modalContent}>
                        <div className={cl.preview}>
                            <div className={cl.textBlock}>
                                <h1>{text('book.modal.location&date')}</h1>
                                <div className={cl.previewElem}>
                                    <div className={cl.elemHeader}>
                                        <Icon>calendar_month</Icon>
                                        <h1>{text('book.modal.pickupdatetime')}</h1>
                                    </div>
                                    <div className={cl.addInfo}>
                                        <p>{modal.pickUpDate} / </p>
                                        <MyInput name={"pickUpTime"} type={"time"}/>
                                    </div>
                                </div>

                                <div className={cl.previewElem}>
                                    <div className={cl.elemHeader}>
                                        <Icon>calendar_month</Icon>
                                        <h1>{text('book.modal.dropoffdatetime')}</h1>
                                    </div>
                                    <div className={cl.addInfo}>
                                        <p>{modal.dropOfDate} / </p>
                                        <MyInput name={"dropOfTime"} type={"time"}/>
                                    </div>
                                </div>

                                <div className={cl.previewElem}>
                                    <div className={cl.elemHeader}>
                                        <Icon>location_on</Icon>
                                        <h1>{text('book.modal.pickuploc')}</h1>
                                    </div>
                                    <div className={cl.addInfo}>
                                        <p>{modal.pickUp}</p>
                                    </div>
                                </div>

                                <div className={cl.previewElem}>
                                    <div className={cl.elemHeader}>
                                        <Icon>location_on</Icon>
                                        <h1>{text('book.modal.dropoffloc')}</h1>
                                    </div>
                                    <div className={cl.addInfo}>
                                        <p>{modal.dropOf}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={cl.previewImg}>
                                <h1>{text('book.modal.car')} - <span>{modal.car}</span></h1>
                                <img alt={"car"} src={getCar(modal.car)} draggable={false}/>
                            </div>
                        </div>
                        <div className={cl.personalInfo}>
                            <h1>{text('book.modal.person.header')}</h1>
                            <div className={cl.inputs}>
                                <div className={cl.infoElem}>
                                    <h1>{text('book.modal.person.firstname')} <span>*</span></h1>
                                    <MyInput type={"text"} placeholder={text('book.modal.person.firstname.input')}/>
                                </div>
                                <div className={cl.infoElem}>
                                    <h1>{text('book.modal.person.lastname')} <span>*</span></h1>
                                    <MyInput type={"text"} placeholder={text('book.modal.person.lastname.input')}/>
                                </div>
                                <div className={cl.infoElem}>
                                    <h1>{text('book.modal.person.age')} <span>*</span></h1>
                                    <MyInput type={"number"} placeholder={"18"}/>
                                </div>
                                <div className={cl.infoElem}>
                                    <h1>{text('book.modal.person.phone')}<span>*</span></h1>
                                    <MyInput type={"text"} placeholder={text('book.modal.person.phone.input')}/>
                                </div>
                                <div className={cl.infoElem}>
                                    <h1>{text('book.modal.person.address')}<span>*</span></h1>
                                    <MyInput type={"email"} placeholder={text('book.modal.person.address.input')}/>
                                </div>
                                <div className={cl.infoElem}>
                                    <h1>{text('book.modal.person.email')}<span>*</span></h1>
                                    <MyInput type={"text"} placeholder={text('book.modal.person.email.input')}/>
                                </div>
                                <div className={cl.infoElem}>
                                    <h1>{text('book.modal.person.city')}<span>*</span></h1>
                                    <MyInput type={"text"} placeholder={text('book.modal.person.city.input')}/>
                                </div>
                                <div className={cl.infoElem}>
                                    <h1>{text('book.modal.person.zip')}<span>*</span></h1>
                                    <MyInput type={"text"} placeholder={text('book.modal.person.zip.input')}/>
                                </div>
                            </div>
                            <div className={cl.submit}>
                                <CheckBox text={text('book.modal.checkbox')}
                                          id={"checkbox"}
                                          name={"notify"}/>
                                <button>{text('book.modal.reserve')}</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>}
        </>
    );
};

export default Book;