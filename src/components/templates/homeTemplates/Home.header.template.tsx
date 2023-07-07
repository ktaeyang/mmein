import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components/native';
import {useRecoilState} from 'recoil';
import {colors} from '../../../utils/colors';
import SvgIconAtom from '../../atoms/common/SvgIcon.atom';

const Container = styled.View`
  height: 60px;
  background-color: ${colors.white};
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-bottom-width: 1px;
  border-color: ${colors.gray};
  margin-bottom: 10px;
`;
const SettingBtn = styled.TouchableOpacity`
  align-items: center;
`;

interface IHomeHeaderTemplate {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}
const HomeHeaderTemplate = (props: IHomeHeaderTemplate) => {
  //* State ----------------------------------------------------------------------
  //* Functions ------------------------------------------------------------------
  const onFilterBtnEvent = useCallback(() => {
    props.setIsVisible(true);
  }, []);

  //* lifecycle ------------------------------------------------------------------
  //* render ---------------------------------------------------------------------
  return (
    <Container>
      <SettingBtn onPress={onFilterBtnEvent}>
        <SvgIconAtom name={'Filter'} size={28} />
      </SettingBtn>
    </Container>
  );
};
export default HomeHeaderTemplate;
