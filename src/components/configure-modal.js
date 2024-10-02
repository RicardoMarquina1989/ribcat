import React, { useEffect, useState } from 'react'
import Switch from '@mui/material/Switch'
import Select from 'react-select'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import { Configurator } from './Configurator/configurator'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import emaijs from "emailjs-com";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export function ConfigureModal({ openConfigureModal, setOpenConfigureModal }) {

  const SEAT_OPTIONS = [
    { value: 'noseat', label: 'No seat', price: 0 },
    { value: 'deluxe', label: 'Deluxe Storage Seat - $350USD', price: 350 },
    { value: 'standard', label: 'Standard Flat Bench Seat - $0 (included)', price: 0 }
  ]

  const PURCHASE_FISH_ITEMS = [
    { value: 0, label: '×0' },
    { value: 1, label: '×1' },
    { value: 2, label: '×2' },
  ]

  const PURCHASE_ITEMS = [
    { value: 0, label: '×0' },
    { value: 1, label: '×1' },
    { value: 2, label: '×2' },
  ]

  const ACCESSORIES = [
    {
      id: 'wheel',
      price: 229,
      title: 'Beach Wheels(2)',
      count: 1,
      type: 'switch'
    },
    {
      id: 'guard',
      price: 229,
      title: 'Tow Bar/Engine Guard',
      count: 1,
      type: 'switch'
    },
    {
      id: 'bag',
      price: 89,
      title: 'Extra Storage Bag*',
      count: 1,
      type: 'switch'
    },
    {
      id: 'canvas',
      price: 229,
      title: 'Full Canvas Cover',
      count: 0,
      type: 'switch'
    },
    {
      id: 'holder',
      price: 89,
      title: 'Fishing Rod/Spear Holder',
      count: 1,
      type: 'select'
    },
    {
      id: 'scuba',
      price: 89,
      title: 'Scuba Tank Holder',
      count: 1,
      type: 'select'
    }
  ]

  const COUNTIRY_OPTIONS = [
    { value: "", label: "Fill in your country" },
    { value: "AF", label: "Afghanistan" },
    { value: "EG", label: "Ägypten" },
    { value: "AX", label: "Ålandinseln" },
    { value: "AL", label: "Albanien" },
    { value: "DZ", label: "Algerien" },
    { value: "VI", label: "Amerikanische Jungferninseln" },
    { value: "UM", label: "Amerikanisch-Ozeanien" },
    { value: "AS", label: "Amerikanisch-Samoa" },
    { value: "AD", label: "Andorra" },
    { value: "AO", label: "Angola" },
    { value: "AI", label: "Anguilla" },
    { value: "AQ", label: "Antarktis" },
    { value: "AG", label: "Antigua und Barbuda" },
    { value: "GQ", label: "Äquatorialguinea" },
    { value: "AR", label: "Argentinien" },
    { value: "AM", label: "Armenien" },
    { value: "AW", label: "Aruba" },
    { value: "AZ", label: "Aserbaidschan" },
    { value: "ET", label: "Äthiopien" },
    { value: "AU", label: "Australien" },
    { value: "BS", label: "Bahamas" },
    { value: "BH", label: "Bahrain" },
    { value: "BD", label: "Bangladesch" },
    { value: "BB", label: "Barbados" },
    { value: "BE", label: "Belgien" },
    { value: "BZ", label: "Belize" },
    { value: "BJ", label: "Benin" },
    { value: "BM", label: "Bermuda" },
    { value: "BT", label: "Bhutan" },
    { value: "BO", label: "Bolivien" },
    { value: "BQ", label: "Bonaire Sint Eustatius und Saba" },
    { value: "BA", label: "Bosnien und Herzegowina" },
    { value: "BW", label: "Botsuana" },
    { value: "BV", label: "Bouvetinsel" },
    { value: "BR", label: "Brasilien" },
    { value: "VG", label: "Britische Jungferninseln" },
    { value: "IO", label: "Britisches Territorium im Indischen Ozean" },
    { value: "BN", label: "Brunei Darussalam" },
    { value: "BG", label: "Bulgarien" },
    { value: "BF", label: "Burkina Faso" },
    { value: "BI", label: "Burundi" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "CK", label: "Cookinseln" },
    { value: "CR", label: "Costa Rica" },
    { value: "CW", label: "Curaçao" },
    { value: "DK", label: "Dänemark" },
    { value: "CD", label: "Demokratische Republik Kongo" },
    { value: "KP", label: "Demokratische Volksrepublik Korea" },
    { value: "DE", label: "Deutschland" },
    { value: "DM", label: "Dominica" },
    { value: "DO", label: "Dominikanische Republik" },
    { value: "DJ", label: "Dschibuti" },
    { value: "EC", label: "Ecuador" },
    { value: "CI", label: "Elfenbeinküste" },
    { value: "SV", label: "El Salvador" },
    { value: "ER", label: "Eritrea" },
    { value: "EE", label: "Estland" },
    { value: "FK", label: "Falklandinseln" },
    { value: "FO", label: "Färöer" },
    { value: "FJ", label: "Fidschi" },
    { value: "FI", label: "Finnland" },
    { value: "FR", label: "Frankreich" },
    { value: "TF", label: "Französische Süd- und Antarktisgebiete" },
    { value: "GF", label: "Französisch-Guayana" },
    { value: "PF", label: "Französisch-Polynesien" },
    { value: "GA", label: "Gabun" },
    { value: "GM", label: "Gambia" },
    { value: "GE", label: "Georgien" },
    { value: "GH", label: "Ghana" },
    { value: "GI", label: "Gibraltar" },
    { value: "GD", label: "Grenada" },
    { value: "GR", label: "Griechenland" },
    { value: "GL", label: "Grönland" },
    { value: "GB", label: "Großbritannien" },
    { value: "GP", label: "Guadeloupe" },
    { value: "GU", label: "Guam" },
    { value: "GT", label: "Guatemala" },
    { value: "GG", label: "Guernsey" },
    { value: "GN", label: "Guinea" },
    { value: "GW", label: "Guinea-Bissau" },
    { value: "GY", label: "Guyana" },
    { value: "HT", label: "Haiti" },
    { value: "HM", label: "Heard und McDonaldinseln" },
    { value: "HN", label: "Honduras" },
    { value: "HK", label: "Hong Kong S.A.R. China" },
    { value: "IN", label: "Indien" },
    { value: "ID", label: "Indonesien" },
    { value: "IM", label: "Insel Man" },
    { value: "IQ", label: "Irak" },
    { value: "IR", label: "Iran" },
    { value: "IE", label: "Irland" },
    { value: "IS", label: "Island" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italien" },
    { value: "JM", label: "Jamaika" },
    { value: "JP", label: "Japan" },
    { value: "YE", label: "Jemen" },
    { value: "JE", label: "Jersey" },
    { value: "JO", label: "Jordanien" },
    { value: "KY", label: "Kaimaninseln" },
    { value: "KH", label: "Kambodscha" },
    { value: "CM", label: "Kamerun" },
    { value: "CA", label: "Kanada" },
    { value: "CV", label: "Kap Verde" },
    { value: "KZ", label: "Kasachstan" },
    { value: "QA", label: "Katar" },
    { value: "KE", label: "Kenia" },
    { value: "KG", label: "Kirgisistan" },
    { value: "KI", label: "Kiribati" },
    { value: "CC", label: "Kokosinseln (Keeling)" },
    { value: "CO", label: "Kolumbien" },
    { value: "KM", label: "Komoren" },
    { value: "CG", label: "Kongo" },
    { value: "XK", label: "Kosovo" },
    { value: "HR", label: "Kroatien" },
    { value: "CU", label: "Kuba" },
    { value: "KW", label: "Kuwait" },
    { value: "LA", label: "Laos" },
    { value: "LS", label: "Lesotho" },
    { value: "LV", label: "Lettland" },
    { value: "LB", label: "Libanon" },
    { value: "LR", label: "Liberia" },
    { value: "LY", label: "Libyen" },
    { value: "LI", label: "Liechtenstein" },
    { value: "LT", label: "Litauen" },
    { value: "LU", label: "Luxemburg" },
    { value: "MO", label: "Macau S.A.R. China" },
    { value: "MG", label: "Madagaskar" },
    { value: "MW", label: "Malawi" },
    { value: "MY", label: "Malaysia" },
    { value: "MV", label: "Malediven" },
    { value: "ML", label: "Mali" },
    { value: "MT", label: "Malta" },
    { value: "MA", label: "Marokko" },
    { value: "MH", label: "Marschallinseln" },
    { value: "MQ", label: "Martinique" },
    { value: "MR", label: "Mauretanien" },
    { value: "MU", label: "Mauritius" },
    { value: "YT", label: "Mayotte" },
    { value: "MX", label: "Mexiko" },
    { value: "FM", label: "Mikronesien" },
    { value: "MC", label: "Monaco" },
    { value: "MN", label: "Mongolei" },
    { value: "ME", label: "Montenegro" },
    { value: "MS", label: "Montserrat" },
    { value: "MZ", label: "Mosambik" },
    { value: "MM", label: "Myanmar" },
    { value: "NA", label: "Namibia" },
    { value: "NR", label: "Nauru" },
    { value: "NP", label: "Nepal" },
    { value: "NC", label: "Neukaledonien" },
    { value: "NZ", label: "Neuseeland" },
    { value: "NI", label: "Nicaragua" },
    { value: "NL", label: "Niederlande" },
    { value: "NE", label: "Niger" },
    { value: "NG", label: "Nigeria" },
    { value: "NU", label: "Niue" },
    { value: "MP", label: "Nördliche Marianen" },
    { value: "MK", label: "Nordmazedonien" },
    { value: "NF", label: "Norfolkinsel" },
    { value: "NO", label: "Norwegen" },
    { value: "OM", label: "Oman" },
    { value: "AT", label: "Österreich" },
    { value: "TL", label: "Osttimor" },
    { value: "PK", label: "Pakistan" },
    { value: "PS", label: "Palästina" },
    { value: "PW", label: "Palau" },
    { value: "PA", label: "Panama" },
    { value: "PG", label: "Papua-Neuguinea" },
    { value: "PY", label: "Paraguay" },
    { value: "PE", label: "Peru" },
    { value: "PH", label: "Philippinen" },
    { value: "PN", label: "Pitcairn" },
    { value: "PL", label: "Polen" },
    { value: "PT", label: "Portugal" },
    { value: "PR", label: "Puerto Rico" },
    { value: "KR", label: "Republik Korea" },
    { value: "MD", label: "Republik Moldau" },
    { value: "RE", label: "Reunion" },
    { value: "RW", label: "Ruanda" },
    { value: "RO", label: "Rumänien" },
    { value: "RU", label: "Russische Föderation" },
    { value: "BL", label: "Saint-Barthélemy" },
    { value: "MF", label: "Saint-Martin" },
    { value: "SB", label: "Salomonen" },
    { value: "ZM", label: "Sambia" },
    { value: "WS", label: "Samoa" },
    { value: "SM", label: "San Marino" },
    { value: "ST", label: "São Tomé und Príncipe" },
    { value: "SA", label: "Saudi-Arabien" },
    { value: "SE", label: "Schweden" },
    { value: "CH", label: "Schweiz" },
    { value: "SN", label: "Senegal" },
    { value: "RS", label: "Serbien" },
    { value: "SC", label: "Seychellen" },
    { value: "SL", label: "Sierra Leone" },
    { value: "ZW", label: "Simbabwe" },
    { value: "SG", label: "Singapur" },
    { value: "SX", label: "Sint Maarten" },
    { value: "SK", label: "Slowakei" },
    { value: "SI", label: "Slowenien" },
    { value: "SO", label: "Somalia" },
    { value: "ES", label: "Spanien" },
    { value: "LK", label: "Sri Lanka" },
    { value: "SH", label: "St. Helena" },
    { value: "KN", label: "St. Kitts und Nevis" },
    { value: "LC", label: "St. Lucia" },
    { value: "PM", label: "St. Pierre und Miquelon" },
    { value: "VC", label: "St. Vinzent und die Grenadinen" },
    { value: "ZA", label: "Südafrika" },
    { value: "SD", label: "Sudan" },
    { value: "GS", label: "Südgeorgien und die Südlichen Sandwichinseln" },
    { value: "SS", label: "Südsudan" },
    { value: "SR", label: "Suriname" },
    { value: "SJ", label: "Svalbard und Jan Mayen" },
    { value: "SZ", label: "Swasiland" },
    { value: "SY", label: "Syrien" },
    { value: "TJ", label: "Tadschikistan" },
    { value: "TW", label: "Taiwan" },
    { value: "TZ", label: "Tansania" },
    { value: "TH", label: "Thailand" },
    { value: "TG", label: "Togo" },
    { value: "TK", label: "Tokelau" },
    { value: "TO", label: "Tonga" },
    { value: "TT", label: "Trinidad und Tobago" },
    { value: "TD", label: "Tschad" },
    { value: "CZ", label: "Tschechische Republik" },
    { value: "TN", label: "Tunesien" },
    { value: "TR", label: "Türkei" },
    { value: "TM", label: "Turkmenistan" },
    { value: "TC", label: "Turks- und Caicosinseln" },
    { value: "TV", label: "Tuvalu" },
    { value: "UG", label: "Uganda" },
    { value: "UA", label: "Ukraine" },
    { value: "HU", label: "Ungarn" },
    { value: "UY", label: "Uruguay" },
    { value: "UZ", label: "Usbekistan" },
    { value: "VU", label: "Vanuatu" },
    { value: "VA", label: "Vatikanstadt" },
    { value: "VE", label: "Venezuela" },
    { value: "AE", label: "Vereinigte Arabische Emirate" },
    { value: "US", label: "Vereinigte Staaten von Amerika" },
    { value: "VN", label: "Vietnam" },
    { value: "WF", label: "Wallis und Futuna" },
    { value: "CX", label: "Weihnachtsinsel" },
    { value: "BY", label: "Weißrussland" },
    { value: "EH", label: "Westsahara" },
    { value: "CF", label: "Zentralafrikanische Republik" },
    { value: "CY", label: "Zypern" },
  ]

  const BASE_PRICE = 11999

  const [accesoryVisibilities, setAccessoryVisiblilities] = useState({
    wheel: true,
    guard: true,
    bag: true,
    canvas: false,
    holder: true,
    scuba: true,
    forwardStandard: true,
    forwardDeluxe: false,
    centerStandard: false,
    centerDeluxe: false,
    rearStandard: true,
    rearDeluxe: false,
  });

  const [accesoryPrice, setAccessoryPrice] = useState(0)
  const [selectedSeats, setSelectedSeats] = useState({ forward: 'standard', center: 'noseat', rear: 'standard' })
  const [customedAccessories, setCustomedAccessories] = useState(ACCESSORIES)
  const [customerInfo, setCustomerInfo] = useState({
    gender: "male",
    firstName: null,
    lastName: null,
    address: null,
    zipCode: null,
    city: null,
    country: null,
    email: null,
    phone: null,
    message: null,
  });

  const handleCustomerInfoChange = (event) => {
    setCustomerInfo({ ...customerInfo, [event.target.name]: event.target.value })
  };

  const formatNumber = (numberToFormat) => new Intl.NumberFormat('en-US').format(numberToFormat)

  const customTheme = (theme) => ({
    ...theme,
    // borderRadius: 0,
    colors: {
      ...theme.colors,
      primary25: '#ed6c02',
      primary: '#ed6c02'
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderedAccessories = {}
    customedAccessories.forEach(item => {
      if (item.count > 0) {
        orderedAccessories[item.id] = `${item.title} × ${item.count}`
      }
    })
    let mailInfo = {
      ...customerInfo,
      orderedAccessories
    };
    sendEmail(mailInfo)
  }

  const sendEmail = () => {
    emaijs.send('service_64q2u6e', 'template_kovng9j', customerInfo, "8vIREnG03tIf1ldBm")
      .then(result => {
        console.log("Email sent successfully", result.text);
      })
      .catch((err) => console.error(err))
  }

  const ucfirst = (str) => {
    str += ''
    const f = str.charAt(0)
      .toUpperCase()
    return f + str.substr(1)
  }

  const handleCountChange = (index, count) => {
    setCustomedAccessories((prevAccessories) => {
      return prevAccessories.map((item, idx) => {
        if (idx == index) {
          setAccessoryVisiblilities({ ...accesoryVisibilities, [item.id]: !!count })
          return { ...item, count }
        }
        return item
      })
    })
  }

  const handleCountryChange = (option) => {
    setCustomerInfo({ ...customerInfo, country: option.label })
  }

  const handleSeatChange = (index, position, option) => {
    if (position == "center" && option.value != "noseat") {
      setSelectedSeats({ forward: 'noseat', center: option.value, rear: 'noseat' })
      setAccessoryVisiblilities({ ...accesoryVisibilities, forwardStandard: false, forwardDeluxe: false, centerDeluxe: option.value == 'deluxe', centerStandard: option.value == 'standard', rearStandard: false, rearDeluxe: false });

    } else {
      setSelectedSeats({ ...selectedSeats, [position]: option.value })
      const mergeInfo = {
        [position + 'Standard']: false,
        [position + 'Deluxe']: false,
      }
      if (option.value != "noseat") {
        mergeInfo[[position + ucfirst(option.value)]] = true;
      }
      setAccessoryVisiblilities({ ...accesoryVisibilities, ...mergeInfo });
    }
  }

  const calcAccessoryPrice = () => {
    let sum = 0

    customedAccessories.forEach((item) => (sum += item.count * item.price))
    // seat
    for (const key in selectedSeats) {
      const seatType = selectedSeats[key];
      sum += seatType == "deluxe" ? 350 : 0
    }

    return sum
  }

  useEffect(() => {
    const accPrice = calcAccessoryPrice()
    setAccessoryPrice(accPrice)
  }, [customedAccessories, selectedSeats])

  useEffect(() => {
    // need to update model
  }, [accesoryVisibilities])

  return (
    <Dialog fullScreen open={openConfigureModal} onClose={() => setOpenConfigureModal(false)} TransitionComponent={Transition}>
      <header className="header-home">
        <div className="menu-bar modal-menu">
          <div className="button-frame">
            <div className="close-button" onClick={() => setOpenConfigureModal(false)}>
              <div className="svg-component">
                <svg width="16" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.98926" y="12.3032" width="16" height="1" transform="rotate(-45 1.98926 12.3032)" fill="#353535"></rect>
                  <rect x="2.69678" y="0.989502" width="16" height="1" transform="rotate(45 2.69678 0.989502)" fill="#353535"></rect>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="header-home__cart-wrapper" style={{ opacity: 1 }}>
          <div className="header-home__cart-wrapper-inner">
            <section className="cart">
              <div className="page-header" data-theme="dark">
                <div className="page-header-content">
                  <div className="ytender-logo">
                    <img src="/images/logo/white.png" />
                  </div>
                  <h1>
                    <div className="page-header-content-title">
                      <p>Customize Your Tender</p>
                    </div>
                    <div className="page-header-content-divider"></div>
                    <small>Click on accessory to interact</small>
                    <figure className="cart-summary-image">
                      <Configurator accesoryVisibilities={accesoryVisibilities} />
                    </figure>
                  </h1>

                </div>
                <section className="cart-form">
                  <div className="cart-form-copy">
                    <ul>
                      <div className="cart-summary-infobox-title">
                        <h2>Titan Tender Accessories</h2>
                      </div>
                      {customedAccessories.map((item, index) => {
                        return (
                          <li key={item.id}>
                            <h4>{item.title}</h4>
                            {item.type == 'switch' ? (
                              <Switch
                                checked={!!item.count}
                                color="warning"
                                onChange={(e) => {
                                  handleCountChange(index, e.target.checked)
                                }}
                              />
                            ) : (
                              <Select
                                options={item.id == 'holder' ? PURCHASE_FISH_ITEMS : PURCHASE_ITEMS}
                                defaultValue={item.id == 'holder' ? PURCHASE_FISH_ITEMS[1] : PURCHASE_ITEMS[1]}
                                placeholder={null}
                                theme={customTheme}
                                onChange={(option) => {
                                  handleCountChange(index, option.value)
                                }}
                              />
                            )}
                            <p>{`$${item.price} USD`}</p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <form>
                    {Object.keys(selectedSeats).map((position, index) => (
                      <section key={position}>
                        <div className="seat-label">
                          <label>{`${ucfirst(position)} Seat`}</label>
                        </div>
                        <div>
                          <Select
                            options={SEAT_OPTIONS}
                            value={SEAT_OPTIONS.filter(function (option) {
                              return option.value === selectedSeats[position];
                            })}
                            theme={customTheme}
                            onChange={(option) => {
                              handleSeatChange(index, position, option)
                            }}
                            isDisabled={position != "center" && selectedSeats.center != 'noseat'}
                          />
                        </div>
                      </section>
                    ))}
                  </form>
                  <div>
                    <div className="total-price-wrapper">
                      <section>
                        <div className="total-price-inner">
                          <label>Base Price</label>
                          <span>{`$${formatNumber(BASE_PRICE)} USD`}</span>
                        </div>
                      </section>
                      <section>
                        <div className="total-price-inner">
                          <label>Accessories</label>
                          <span>{`$${formatNumber(accesoryPrice)} USD`}</span>
                        </div>
                      </section>
                      <section>
                        <div className="total-price-inner">
                          <label>Total</label>
                          <span>{`$${formatNumber(BASE_PRICE + accesoryPrice)} USD`}</span>
                        </div>
                      </section>
                    </div>
                    <div className="ps-note-wrapper">
                      <p className="ps-note">*All Titan Tenders come standard with one removable storage bag. </p>
                      <p className="ps-note">*All accesories are shipped seperatly and user installed. Shipping not included. </p>
                      <p className="ps-note">*All Titan Tenders come standard with two regular bench seats. </p>
                    </div>
                    <button className='custom-purchase-btn'>Click here to sign up for the preorder waitlist!</button>
                  </div>
                </section>
              </div>
              <div className="page-header" data-theme="dark">
                <div className="page-header-content">
                  <section className="cart-form contact-form">
                    <div className="cart-form-copy">
                      <h2 className="cart-form-copy-title">
                        <p>GET YOUR TITAN TENDER</p>
                      </h2>
                      <div className="cart-form-copy-desc">
                        <p>To make a binding order, please fill the form with all required informations.</p>
                        <p><strong>Confirmation and Payment</strong><br />We will send you an E-Mail with all further informations.
                          In this E-Mail you will find a request to make a reservation payment of 10% of the total price.</p>
                        <p><strong>Delivery</strong><br />If you order now, your Ribcat will be ready Ex Works in 10-12 weeks.</p>
                        <p><strong>Shipping</strong><br />We will organize shipping from Hamburg to your destination individually.
                        </p>
                        <p><strong>Not entirely sure about your configuration?</strong><br />Not to worry, we'll be happy to advise
                          and assist you in any questions you have and help you making changes even after your order.</p>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <section><label data-columns="2">name=Salutation</label>
                        <div data-columns="2">
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="gender"
                            onChange={handleCustomerInfoChange}
                            value={customerInfo.gender}
                          >
                            <FormControlLabel value="female" control={<Radio color="warning" />} label="Mrs" />
                            <FormControlLabel value="male" control={<Radio color="warning" />} label="Mr" />
                          </RadioGroup>
                        </div>
                      </section>
                      <section>
                        <div><label for="vorname">First name</label><input type="text" required="" name="firstName" id="vorname"
                          placeholder="First name" value={customerInfo.firstName} /></div>
                        <div><label for="nachname">Name</label><input type="text" required="" name="lastName" id="nachname"
                          placeholder="Name" value={customerInfo.lastName} /></div>
                      </section>
                      <section>
                        <div data-columns="2"><label for="anschrift">Street, Number</label><input type="text" required=""
                          name="address" id="anschrift" placeholder="Street, Number" value={customerInfo.lastName} /></div>
                      </section>
                      <section>
                        <div><label for="postleitzahl">Post Code</label><input type="text" required="" name="zipCode"
                          id="postleitzahl" placeholder="Post Code" value={customerInfo.zipCode} /></div>
                        <div><label for="stadt">City</label><input type="text" required="" name="city" id="stadt" placeholder="City"
                          value={customerInfo.city} /></div>
                      </section>
                      <section><label data-columns="2" for="land">Country</label>
                        <Select
                          id='land'
                          name='country'
                          options={COUNTIRY_OPTIONS}
                          defaultValue={COUNTIRY_OPTIONS[0]}
                          placeholder={null}
                          theme={customTheme}
                          style={{ "grid-column": "1 / -1" }}
                          onChange={(option) => {
                            handleCountryChange(option)
                          }}
                        />
                      </section>
                      <section><label data-columns="2" for="email">Your e-mail address</label><input data-columns="2" type="email"
                        required="true" name="email" id="email" placeholder="Your e-mail address" value={customerInfo.email} onChange={handleCustomerInfoChange} /></section>
                      <section><label data-columns="2" for="tel">Your phone number</label><input type="text" required="true"
                        data-columns="2" name="phone" id="tel" placeholder="+49 123 455 66" value={customerInfo.phone} onChange={handleCustomerInfoChange} /></section>
                      <section><label data-columns="2" for="message">Your message</label><textarea data-columns="2" name="message"
                        id="message" rows="3" value={customerInfo.message} onChange={handleCustomerInfoChange} required="true"></textarea></section>
                      <button type="submit">Send</button>
                    </form>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
      </header>
    </Dialog>
  )
}
