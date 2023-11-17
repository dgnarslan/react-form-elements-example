import React, { useState } from 'react';
import './style.css';

export default function App() {

  const genders = [
    {key:'1', value:'Erkek'},
    {key:'2', value:'Kadın'}
  ]

  const categoryList = [
    {key : 1, value : 'PHP'},
    {key : 2, value : 'JavaScript'},
    {key : 3, value : 'CSS'},
    {key : 4, value: 'HTML'}
  ]


  
  const [name, setName] = useState('Dgn')
  const [description, setDescription] = useState('')
  const [gender, setGender] = useState('')
  const [category, setCategory] = useState([2, 4])
  const [rule, setRule] = useState(false)
  const [rules, setRules] = useState([
    {key : 1 , value: '1. kuralı kabul ediyorum', checked: false},
    {key : 2 , value: '2. kuralı kabul ediyorum', checked: false},
    {key : 3 , value: '3. kuralı kabul ediyorum', checked: true},
  ])
  
  const selectedCategory = category && categoryList.filter(cat => category.includes(cat.key))
  const selectGender = genders.find(g => g.key === gender)

  const checkRule = (key,checked) => {
    setRules(rules => rules.map(rule => {
      if(key === rule.key){
        rule.checked = checked
      }
      return rule
    }))
  }

  const enabled = rules.every(rule => rule.checked)


  return (
    <>

      <button onClick={ () => setDescription('Naber')}>Adı Değiştir</button>
      <br />
      <hr />
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <hr />
      <textarea defaultValue={description}></textarea>
      <br />
      <select value={gender} onChange={e => setGender(e.target.value)}>
        <option value="">Seçiniz</option>
        {genders.map(gender => (
          <option value={gender.key} key={gender.key}> {gender.value}</option>
        ))}
      </select>
        <hr />
      <br />
      <button onClick={() => setCategory([2,3])}>Kategöri seç</button>
      
      <select value={category} multiple={true} onChange={e => setCategory([...e.target.selectedOptions].map(option => +option.value))}>
        {categoryList.map(category => (
          <option value={category.key} key={category.key}> {category.value}</option>
        ))}
      </select>

      <pre>
        {JSON.stringify(selectedCategory , null , 2)}
      </pre>
      <br />
      <hr />
      <label>
          <input type="checkbox"  checked={rule} onChange={e  => setRule(e.target.checked)} />
          Kuralları kabul ediyorum
      </label>
      <br />
      <button disabled={!rule}>Devam Et</button>
      <br />
      <hr />
      {rules.map(rule => (
      <label key={rule.key}>
        <input type="checkbox"  checked={rule.checked} onChange={e => checkRule(rule.key, e.target.checked)}/>
          {rule.value}
        </label>
      ))}
      <br />
      <button disabled={!enabled}>Devam Et</button>
    </>
  ); 
}
