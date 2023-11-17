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
  
  const selectGender = genders.find(g => g.key === gender)


  return (
    <>

      <button onClick={ () => setDescription('Naber')}>Adı Değiştir</button>
      <br />
      <hr />
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <hr />
      <textarea value={description}></textarea>
      <br />
      <select value={gender} onChange={e => setGender(e.target.value)}>
        <option value="">Seçiniz</option>
        {genders.map(gender => (
          <option value={gender.key} key={gender.key}> {gender.value}</option>
        ))}
      </select>
        <hr />
      <br />
      <select value={category} multiple={true} onChange={e => setCategory([...e.target.selectedOptions].map(option => option.value))}>
        {categoryList.map(category => (
          <option value={category.key} key={category.key}> {category.value}</option>
        ))}
      </select>

      <pre>
        {JSON.stringify(category, null , 2)}
      </pre>
    </>
  ); 
}
