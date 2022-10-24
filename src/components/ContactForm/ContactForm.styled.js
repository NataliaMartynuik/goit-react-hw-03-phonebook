import styled from 'styled-components';

export const ContactForm = styled.form`
  border: 1px solid rgb(79, 68, 60);
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 300px;
  padding: 40px;
`
export const ContactLabel = styled.label`
  font-weight: 700;
  font-size: 24px;
  padding-bottom: 10px;
  padding-top: 10px;
  
`

export const ContactInput = styled.input`
    height: 40px;
    outline: none;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    padding-left: 22px;
    margin-top: 4px;
    font-size: 18px;
`

export const ContactButton = styled.button`
    cursor: pointer;
    padding: 6px 22px;
    font-weight: 500;
    font-size: 18px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
    background-color: rgb(79, 68, 60);
    color: rgb(244, 234, 225);
    margin-top: 40px;
    border: none;
    height: 40px;
`