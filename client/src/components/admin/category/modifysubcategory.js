import { useEffect, useState } from "react"
import { MdClose } from "react-icons/md"
import styled from "styled-components"

const Overley = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: rgb(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.25s;
  &.show {
    visibility: visible;
    opacity: 1;
  }
  &.hide {
    visibility: hidden;
    opacity: 0;
  }
`
const CategoryModal = styled.div`
  position: relative;
  width: 350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px 20px 15px 20px;
  box-shadow: 0px 0px 4px 1px rgb(255, 255, 255, 0.5);
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .close {
    cursor: pointer;
    position: absolute;
    right: 8px;
    top: 13px;
    font-size: 24px;
    &:hover {
      color: var(--color);
    }
  }
  .row {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    .input-title {
      font-size: 14px;
      font-weight: bold;
    }
    &.button {
      margin-top: 10px;
      margin-bottom: 0;
      justify-content: end;
      input[type=file] {
        display: none;
      }
      label {
        cursor: pointer;
        width: fit-content;
        height: fit-content;
        border: 1.5px solid #aaa;
        color: #666;
        border-radius: 3px;
        padding: 5px 8px 5px 8px;
        font-size: 14px;
        font-weight: bold;
        &:hover {
          background-color: #aaa;
          color: #fff;
        }
      }
    }
  }
`
const SubCategoryModal = styled(CategoryModal)`
  .re {
    position: relative;
  }
`
const Input = styled.input`
  width: 230px;
  height: 28px;
  font-size: 12px;
  border: 1.5px solid #ddd;
  border-radius: 3px;
  padding-left: 5px;
  &:focus {
    outline: none;
  }
`
const FilterBox = styled.div`
  cursor: pointer;
  width: 240px;
  height: 32px;
  padding: 0px 10px 0px 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1.5px solid #ddd;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    border: 1.5px solid #aaa;
  }
`
const FilterList = styled.div`
  position: absolute;
  width: 240px;
  height: fit-content;
  background-color: #fff;
  box-shadow: 0px 0px 1px 0.5px rgb(0, 0, 0, 0.3);
  top: 35px;
  right: 0;
  transition: all 0.25s;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  opacity: ${props => (props.open ? 1 : 0)};
  .item {
    cursor: pointer;
    width: 100%;
    height: fit-content;
    padding: 7px 8px 7px 8px;
    font-size: 14px;
    font-weight: bold;
    &:hover {
      background-color: var(--color);
      color: #fff;
    }
  }
`
const Button = styled.div`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  border: 1.5px solid black;
  border-radius: 3px;
  padding: 4px;
  margin: 0px 4px 0px 4px;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background-color: black;
    color: #fff;
  }
`
const BlueButton = styled(Button)`
  border: 1.5px solid var(--color);
  margin: 0;
  margin-left: 10px;
  padding: 5px 8px 5px 8px;
  color: var(--color);
  &:hover {
    background-color: var(--color);
    color: #fff;
  }
`

const ModifySubCategory = ({open, onClose, category, selectedData}) => {

  const [openCategoryFilter, setOpenCategoryFilter] = useState(false);
  const [choiceCategory, setChoiceCategory] = useState('대분류 선택');
  const [subCategoryName, setSubCategoryName] = useState('');
  const handleClose = () => {
    onClose();
  };
  const handleSubCategoryName = (e) => {
    const value = e.target.value;
    setSubCategoryName(value);
  };
  useEffect(() => {
    setChoiceCategory(selectedData && selectedData.category);
    setSubCategoryName(selectedData && selectedData.name);
  }, [selectedData && selectedData]);

  return (
    <Overley className={open ? 'show' : 'hide'}>
      <SubCategoryModal>
        <MdClose className="close" onClick={() => { handleClose(); setOpenCategoryFilter(false); }} />
        <span className="title">소분류 생성</span>
        <div className="row re">
          <span className="input-title">대분류</span>
          <FilterBox onClick={() => { setOpenCategoryFilter(!openCategoryFilter) }}>
            {choiceCategory}
          </FilterBox>
          <FilterList open={openCategoryFilter}>
            {
              category && category.map((item, i) => {
                return (
                  <div key={i} className="item" onClick={() => { setChoiceCategory(item.name); setOpenCategoryFilter(false); }}>{item.name}</div>
                )
              })
            }
          </FilterList>
        </div>
        <div className="row">
          <span className="input-title">소분류명</span>
          <Input type="text" spellCheck="false" defaultValue={subCategoryName} />
        </div>
        <div className="row button">
          <BlueButton>생성</BlueButton>
        </div>
      </SubCategoryModal>
    </Overley>
  )
};

export default ModifySubCategory;