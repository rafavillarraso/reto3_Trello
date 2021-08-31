import './App.css';
import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import List from './components/List/List';
import store from './store/store';
import StoreApi from './store/storeApi';
import InputContainer from './components/Input/InputContainer';
import {makeStyles} from '@material-ui/core/styles';


const useStyle = makeStyles((theme) =>({
  root: {
    display: 'flex',
    minHeight:'100vh',
    background:'cadetblue',
  }
} ));

function App() {
  const [data, setData] = useState(store);
  const classes = useStyle();
  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards,newCard];

    const NewState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(NewState);
  };

const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds,newListId],
      lists:{
        ...data.lists,
        [newListId]:newList
      }
    }
    setData(newState);
}

  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList }}>
    <div className={classes.root} >
      {data.listIds.map((listId)=> {
        const list = data.lists[listId];
        return <List list={list} key={listId} />;
      })}
      <InputContainer type='list' />
    </div>
    </StoreApi.Provider>

  );
}

export default App;
