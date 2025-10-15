import styles from "./Home.module.css";
import Footer from "./Footer";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";


function Image() {
    return(
        <>
            <div id="top" className={styles.topDiv}>
                <div className={styles.secondDiv}>
                    <h1> Welcome to Rahisi shop </h1>
                    <div className={styles.navigate}>
                        <p> Navigate to categories </p>
                        <hr/>
                        <HashLink smooth to="#elec" className={styles.MyLinks}> Electronics </HashLink>
                        <hr/>
                        <HashLink smooth to="#food" className={styles.MyLinks}> Foods </HashLink>
                        <hr/>
                        <a href="#" className={styles.MyLinks}> Farming </a>
                        <hr/>
                        <HashLink smooth to ="#build" className={styles.MyLinks}> Building & Constructions </HashLink>
                        <hr/>
                        <a href="#" className={styles.MyLinks}> Clothing </a>
                        <hr/>
                    </div>
                </div>
                <div className={styles.secondDiv}>
                    <img src="/pica.png"
                     className={styles.MyPic}/>
                </div>
            </div>
        </>
    );
}

function Foodsa() {
    //Set the ndovu flour
    const [ndovu, setNdovu] = useState(0);
    function AddNdovu() {
        setNdovu(ndovu + 1);
    }
    function RemoveNdovu() {
        if(ndovu > 0) {
            setNdovu(ndovu - 1);
        }
    }
    const priceNdovu = ndovu * 165;

    //Set the Exe flour
    const [exe, setExe] = useState(0);
    function AddExe() {
        setExe(exe + 1);
    }
    function RemoveExe() {
        if(exe > 0) {
            setExe(exe - 1);
        }
    }
    const priceExe = exe * 135;

    //Set Rina cooking oil
    const [rina, setRina] = useState(0);
    function AddRina() {
        setRina(rina + 1);
    }
    function RemoveRina() {
        if(rina > 0) {
            setRina(rina - 1);
        }
    }
    const priceRina = rina * 210;

    //Set Soap
    const [soap, setSoap] = useState(0);
    function AddSoap() {
        setSoap(soap + 1);
    }
    function RemoveSoap() {
        if(soap > 0) {
            setSoap(soap - 1);
        }
    }
    const priceSoap = soap * 170;

    //Set Salt
    const [salt, setSalt] = useState(0);
    function AddSalt() {
        setSalt(salt + 1);
    }
    function RemoveSalt() {
        if(salt > 0) {
            setSalt(salt - 1);
        }
    }
    const priceSalt= salt * 80;

    //Set Sugar
    const [sugar, setSugar] = useState(0);
    function AddSugar() {
        setSugar(sugar + 1);
    }
    function RemoveSugar() {
        if(sugar > 0) {
            setSugar(sugar - 1);
        }
    }
    const priceSugar = sugar * 250;

    //Set phone
    const [phone, setPhone] = useState(0);
    function AddPhone() {
        setPhone(phone + 1);
    }
    function RemovePhone() {
        if(phone > 0) {
            setPhone(phone - 1);
        }
    }
    const pricePhone = phone * 14500;

    //Set Laptop
    const [laptop, setLaptop] = useState(0);
    function AddLaptop() {
        setLaptop(laptop + 1);
    }
    function RemoveLptop() {
        if(laptop > 0) {
            setLaptop(laptop - 1);
        }
    }
    const priceLaptop = laptop * 32000;

    //Set Iron
    const [iron, setIron] = useState(0);
    function AddIron() {
        setIron(iron + 1);
    }
    function RemoveIron() {
        if(iron > 0) {
            setIron(iron - 1);
        }
    }
    const priceIron = iron * 1270;

    //Set Kettle
    const [kettle, setKettle] = useState(0);
    function AddKettle() {
        setKettle(kettle + 1);
    }
    function RemoveKettle() {
        if(kettle > 0) {
            setKettle(kettle - 1);
        }
    }
    const priceKettle = kettle * 800;

    //Set Charger
    const [charger, setCharger] = useState(0);
    function AddCharger() {
        setCharger(charger + 1);
    }
    function RemoveCharger() {
        if(charger > 0) {
            setCharger(charger - 1);
        }
    }
    const priceCharger = charger * 450;

    //Set Heater
    const [heater, setHeater] = useState(0);
    function AddHeater() {
        setHeater(heater + 1);
    }
    function RemoveHeater() {
        if(heater > 0) {
            setHeater(heater - 1);
        }
    }
    const priceHeater = heater * 1100;

    //Set Iron sheets
    const [sheet, setSheet] = useState(0);
    function AddSheet() {
        setSheet(sheet + 1);
    }
    function RemoveSheet() {
        if(sheet > 0) {
            setSheet(sheet - 1);
        }
    }
    const priceSheet = sheet * 950;

    //Set Nails
    const [nails, setNails] = useState(0);
    function AddNails() {
        setNails(nails + 1);
    }
    function RemoveNails() {
        if(nails > 0) {
            setNails(nails - 1);
        }
    }
    const priceNails = nails * 170;

    //Set Harmer
    const [harmmer, setHarmmer] = useState(0);
    function AddHarmmer() {
        setHarmmer(harmmer + 1);
    }
    function RemoveHarmmer() {
        if(harmmer > 0) {
            setHarmmer(harmmer - 1);
        }
    }
    const priceHarmmer = harmmer * 270;

    //Set Cemment
    const [cemment, setCemment] = useState(0);
    function AddCemment() {
        setCemment(cemment + 1);
    }
    function RemoveCemment() {
        if(cemment > 0) {
            setCemment(cemment - 1);
        }
    }
    const priceCemment = cemment * 870;

    //Set Pipes
    const [pipe, setPipe] = useState(0);
    function AddPipe() {
        setPipe(pipe + 1);
    }
    function RemovePipe() {
        if(pipe > 0) {
            setPipe(pipe - 1);
        }
    }
    const pricePipe = pipe * 165;

    //Set Metal rod
    const [rod, setRod] = useState(0);
    function AddRod() {
        setRod(rod + 1);
    }
    function RemoveRod() {
        if(rod > 0) {
            setRod(rod - 1);
        }
    }
    const priceRod = rod * 230;
    return(
        <>
            <p id="food"> Home & Foods </p>
            <div className={styles.Foodsa}>
                <div className={styles.subFoodsa}>
                    <p> Ndovu flour @ Ksh.165 </p>
                    <div>
                        <img src="/pic/ndovu.jpeg"
                            className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceNdovu} </p>
                    <button className={styles.AddToCart}>
                       <p className={styles.pInside}
                          onClick={RemoveNdovu}> -
                         </p>  {ndovu} 
                         <p className={styles.pInside}
                            onClick={AddNdovu}> + 
                         </p>
                    </button>
                </div>

                <div className={styles.subFoodsa}>
                    <p> EXE flour @ Ksh.135 </p>
                    <div>
                        <img src="/pic/exe.jpeg"
                             className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceExe} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemoveExe}>
                              -    
                        </p> {exe}
                        <p className={styles.pInside}
                           onClick={AddExe}>
                            +
                        </p>
                    </button>
                </div>

                <div className={styles.subFoodsa}>
                    <p> Rina Oil @Ksh. 210</p>
                    <div>
                        <img src="/pic/rina.jpeg"
                            className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceRina} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemoveRina}>
                            -
                        </p>
                        {rina} 
                        <p className={styles.pInside}
                           onClick={AddRina}>
                            +
                        </p>
                    </button>
                </div>

                <div className={styles.subFoodsa}>
                    <p> Meningai soap @Ksh. 170 </p>
                    <div>
                        <img src="/pic/soap.jpeg"
                            className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceSoap} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemoveSoap}>
                            -
                        </p>
                        {soap}
                        <p className={styles.pInside}
                           onClick={AddSoap}>
                             +    
                        </p> 
                    </button>
                </div>

                <div className={styles.subFoodsa}>
                    <p> Salt @ Kahs. 80 </p>
                    <div >
                        <img src="/pic/salt.jpeg"
                             className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceSalt} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemoveSalt}>
                            -
                        </p>
                        {salt}
                        <p className={styles.pInside}
                           onClick={AddSalt}>
                            +
                        </p>
                    </button>
                </div>

                <div className={styles.subFoodsa}>
                    <p> Sugar @Ksh.250 </p>
                    <div >
                        <img src="/pic/sugar.jpeg"
                             className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceSugar} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemoveSugar}>
                            -
                        </p>
                        {sugar} 
                        <p className={styles.pInside}
                           onClick={AddSugar}>
                            +
                        </p>
                    </button>
                </div>
            </div>

            <p id="elec"> Electronics </p>
            <div className={styles.Foodsa}>
                <div className={styles.subFoodsa}>
                    <p> Phone @Ksh. 14500 </p>
                    <div>
                        <img src="/pic/phone.webp"
                            className={styles.picDiva}/>
                    </div>
                    <p> Bill: {pricePhone} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemovePhone}>
                            -
                        </p>
                        {phone}
                        <p className={styles.pInside}
                           onClick={AddPhone}>
                            +
                        </p>
                    </button>
                </div>

                <div className={styles.subFoodsa}>
                    <p> Laptop @Ksh. 32000 </p>
                    <div>
                        <img src="/pic/laptop.webp"
                             className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceLaptop} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemoveLptop}>
                            -
                        </p>
                        {laptop} 
                        <p className={styles.pInside}
                           onClick={AddLaptop}>
                            +
                        </p>
                    </button>
                </div>

                <div className={styles.subFoodsa}>
                    <p> Iron @Ksh. 1270 </p>
                    <div>
                        <img src="/pic/iron.jpeg"
                            className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceIron} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemoveIron}>
                            -
                        </p>
                        {iron} 
                        <p className={styles.pInside}
                           onClick={AddIron}>
                            +
                        </p>
                    </button>
                </div>

                <div className={styles.subFoodsa}>
                    <p> Kettle @Ksh. 800 </p>
                    <div>
                        <img src="/pic/kettle.jpeg"
                            className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceKettle} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemoveKettle}>
                            -
                        </p>
                       {kettle} 
                       <p className={styles.pInside}
                          onClick={AddKettle}>
                            +
                       </p>
                    </button>
                </div>

                <div className={styles.subFoodsa}>
                    <p> Charger @Ksh.450 </p>
                    <div >
                        <img src="/pic/charger.jpeg"
                             className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceCharger} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemoveCharger}>
                            -
                        </p>
                        {charger} 
                        <p className={styles.pInside}
                           onClick={AddCharger}>
                            +
                        </p>
                    </button>
                </div>

                <div className={styles.subFoodsa}>
                    <p> Heater @Ksh. 1100 </p>
                    <div >
                        <img src="/pic/heater.jpeg"
                             className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceHeater} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemoveHeater}>
                            -
                        </p>
                        {heater} 
                        <p className={styles.pInside}
                           onClick={AddHeater}>
                            +
                        </p>
                    </button>
                </div>
            </div>

            <p id="build"> Building & Constructions </p>
            <div className={styles.Foodsa}>
                <div className={styles.subFoodsa}>
                    <p> Sheet @Ksh. 950 </p>
                    <div>
                        <img src="/pic/sheet.jpeg"
                            className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceSheet} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemoveSheet}>
                            -
                        </p>
                        {sheet}
                        <p className={styles.pInside}
                           onClick={AddSheet}>
                            +    
                        </p> 
                    </button>
                </div>

                <div className={styles.subFoodsa}>
                    <p> Nails @Ksh. 170 </p>
                    <div>
                        <img src="/pic/nails.jpeg"
                             className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceNails} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemoveNails}>
                            -
                        </p>
                        {nails} 
                        <p className={styles.pInside}
                           onClick={AddNails}>
                            +
                        </p>
                    </button>
                </div>

                <div className={styles.subFoodsa}>
                    <p> Harmmer @Ksh. 270 </p>
                    <div>
                        <img src="/pic/harmmer.png"
                            className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceHarmmer} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemoveHarmmer}>
                            -
                        </p>
                        {harmmer} 
                        <p className={styles.pInside}
                           onClick={AddHarmmer}>
                            +
                        </p>
                    </button>
                </div>

                <div className={styles.subFoodsa}>
                    <p> Cemment @Ksh. 870 </p>
                    <div>
                        <img src="/pic/cement.jpeg"
                            className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceCemment} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                            onClick={RemoveCemment}>
                            -
                        </p>
                        {cemment} 
                        <p className={styles.pInside}
                           onClick={AddCemment}>
                            +
                        </p>
                    </button>
                </div>

                <div className={styles.subFoodsa}>
                    <p> Pipe @Ksh. 165 </p>
                    <div >
                        <img src="/pic/pipe.jpeg"
                             className={styles.picDiva}/>
                    </div>
                    <p> Bill: {pricePipe} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemovePipe}>
                            -
                        </p>
                        {pipe} 
                        <p className={styles.pInside}
                           onClick={AddPipe}>
                            +
                        </p>
                    </button>
                </div>

                <div className={styles.subFoodsa}>
                    <p> Metal rod @Ksh. 230</p>
                    <div >
                        <img src="/pic/rod.webp"
                             className={styles.picDiva}/>
                    </div>
                    <p> Bill: {priceRod} </p>
                    <button className={styles.AddToCart}>
                        <p className={styles.pInside}
                           onClick={RemoveRod}>
                            -
                        </p>
                        {rod} 
                        <p className={styles.pInside}
                           onClick={AddRod}>
                            +
                        </p>
                    </button>
                </div>
            </div>
            <HashLink smooth to = "#top" className={styles.MyLinks}> Top </HashLink>

        </>
    );
}

function Home() {
    return(
        <>
            <div>
                <Image/>
                <Foodsa/>
                <Footer/>
            </div>
        </>
    );
}

export default Home;