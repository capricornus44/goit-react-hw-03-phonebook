import css from "./Filter.module.scss"

const Filter = ({ filter, onChange }) => {
  return (
    <div className={css.filterBox}>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input className={css.filterInput} type="text" value={filter} onChange={onChange} />
    </div>
  )
}

export default Filter
