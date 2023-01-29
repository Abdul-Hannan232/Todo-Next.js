"use client";
import "./global.css";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  IconButton,
  Flex,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

import { Center } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<object[]>([]);
  const [todo, setTodo] = useState("");

  const addValueHandler = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  const delValueHandler = (meraTodo: { todoText: String }) => {
    const newTodos = todos.filter((el) => {
      if (el.todoText == meraTodo.todoText) {
        return false;
      }
      return true;
    });

    setTodos(newTodos);
  };

  return (
    <Center h="100vh">
      <div className="box">
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={"text"}
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            placeholder="Enter todo"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="md" onClick={addValueHandler}>
              ADD
            </Button>
          </InputRightElement>
        </InputGroup>

        <div className="data-div">
          {todos.map((el) => {
            return (
              <Flex justifyContent={"space-between"} className={"data"}>
                <span key={el.todoText}>{el.todoText}</span>

                <IconButton
                  colorScheme="teal"
                  aria-label="Call Segun"
                  size="xs"
                  icon={<DeleteIcon />}
                  onClick={() => {
                    delValueHandler(el);
                  }}
                />
              </Flex>
            );
          })}
        </div>
      </div>
    </Center>
  );
}
