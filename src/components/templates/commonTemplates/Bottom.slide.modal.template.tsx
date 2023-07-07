import React, {Dispatch, SetStateAction} from 'react';
import Modal from 'react-native-modal';
import {styled} from 'styled-components/native';
import {colors} from '../../../utils/colors';

const ModalContainer = styled.View`
  background-color: ${colors.white};
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-bottom: 50px;
`;
const TopContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;
const TopLine = styled.View`
  background-color: ${colors.gray};
  width: 50px;
  height: 5px;
  border-radius: 25px;
  margin: 20px 0px;
`;

interface IBottomSlideModalProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}
const BottomSlideModalTemplate = (props: IBottomSlideModalProps) => {
  const onModalClose = () => {
    props.setIsVisible(false);
  };

  return (
    <Modal
      isVisible={props.isVisible}
      onBackButtonPress={onModalClose}
      onBackdropPress={onModalClose}
      animationOut={'slideOutDown'}
      style={{margin: 0, justifyContent: 'flex-end'}}>
      <ModalContainer>
        <TopContainer>
          <TopLine />
        </TopContainer>

        {props.children}
      </ModalContainer>
    </Modal>
  );
};

export default React.memo(BottomSlideModalTemplate);
