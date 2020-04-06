import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { API, graphqlOperation } from "aws-amplify";
import { createPost } from "../../src/graphql/mutations";
import { CreatePostInput } from "../../src/API";

const useInput = () => {
  const [value, setValue] = useState<string>("");
  
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { target: { value }} = event;
    setValue(value);
  }

  return {
    value,
    onChange,
  };
}

export default () => {
  
  const formTitle = useInput();
  const formText = useInput();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    
    const { value: title } = formTitle;
    const { value: text } = formText;

    console.log("data: ", title, text);

    const input: CreatePostInput = {
      text,
      title  
    };

    const newPost = await API.graphql(graphqlOperation(createPost, { input }));
    console.log("newPost: ", newPost);
  }

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'block',
      marginBottom: '50px'
    }}>
       <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth { ...formTitle } style={{display: 'block', width: '50%', marginBottom: '10px' }}/>
       <TextField id="outlined-basic" label="Text" variant="outlined" fullWidth { ...formText } style={{display: 'block', width: '50%', marginBottom: '10px'}}/>
       <Button variant="contained" color="primary" type="submit" style={{display: 'block', width: '50%'}}>생성하기</Button>
    </form>
  )
};