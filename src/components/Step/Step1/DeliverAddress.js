import React from 'react'
import styles from './DeliverAddress.module.css'


export default function DeliverAddress() {
  return (
    <section>
      
      <div className={styles.DeliverAddress__panel}>
      <h2>寄送地址</h2>
      <div className={styles.form__row}>
       <div className={styles.title__part}>
        <label>稱謂</label>
        <div className={styles.select_wrapper}>
        <select>
        <option value={styles.man}>先生</option>  
        <option value={styles.woman}>女士</option>  
        </select>
        </div>
        </div>
        <div className={styles.name__part}>
        <label className={styles.name}>姓名</label>
        <input id={styles.input__name} placeholder='請輸入姓名'></input>
        </div>
        </div>

        <div className={styles.form__row}>
        <div className={styles.telphone__part}>
        <label>電話</label>
        <input id={styles.input__telphone} placeholder='請輸入行動電話'></input>
        </div>
        <div className={styles.email__part}>
        <label className={styles.email}>Email</label>
        <input id={styles.input__email} placeholder='請輸入電子郵件'></input>
        </div>
        </div>

        <div className={styles.form__row}>
        <div className={styles.address__part}>
        <label>縣市</label>
        <div className={styles.select_wrapper}>
        <select>
          <option value="">請選擇縣市</option>
          <option value="KLU">基隆市</option>
          <option value="TPH">新北市</option>
          <option value="TPE">臺北市</option>
          <option value="TYC">桃園市</option>
          <option value="HSH">新竹縣</option>
          <option value="HSC">新竹市</option>
          <option value="MAC">苗栗市</option>
          <option value="MAL">苗栗縣</option>
          <option value="TXG">臺中市</option>
          <option value="CWH">彰化縣</option>
          <option value="CWS">彰化市</option>
          <option value="NTC">南投市</option>
          <option value="NTO">南投縣</option>
          <option value="YLH">雲林縣</option>
          <option value="CHY">嘉義縣</option>
          <option value="CYI">嘉義市</option>
          <option value="TNN">臺南市</option>
          <option value="KHH">高雄市</option>
          <option value="IUH">屏東縣</option>
          <option value="PTS">屏東市</option>
          <option value="ILN">宜蘭縣</option>
          <option value="ILC">宜蘭市</option>
          <option value="HWA">花蓮縣</option>
          <option value="HWC">花蓮市</option>
          <option value="TTC">臺東市</option>
          <option value="TTT">臺東縣</option>
          <option value="PEH">澎湖縣</option>
          <option value="KMN">金門縣</option>
          <option value="LNN">連江縣</option>
        </select>
        </div>
        </div>
        <div className={styles.address__part}>
        <label className={styles.address}>地址</label>
        <input id={styles.input__address} placeholder='請輸入地址'></input>
        </div>
        </div>

      </div>
    </section>
  )
}