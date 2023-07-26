const countryCapitals: { country: string; capital: string }[] = [
  {country: '日本', capital: '東京'},
  {country: 'アメリカ', capital: 'ワシントンD.C.'},
  {country: '中国', capital: '北京'},
  {country: 'イギリス', capital: 'ロンドン'}
];

export default function CountryCapitalList() {
  return (
    <div>
      <h1>国の首都リスト</h1>
      <ul>
        {countryCapitals.map(countryCapital => {
          return (
            <li key={countryCapital.country} style={{color: 'red'}}>
              {countryCapital.country} ... {countryCapital.capital}
            </li>
          );
        })}
      </ul>
    </div>
  );
}