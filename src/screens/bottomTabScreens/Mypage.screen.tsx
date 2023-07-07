import React, {useEffect} from 'react';
// import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import {useRecoilState} from 'recoil';
import {Text} from 'react-native';
import {colors} from '../../utils/colors';
// import { LANGUAGES } from '../../../utils/constant/constant';
// import { langIdState } from '../../../utils/recoilStates/user.state';
// import colors from '../../../utils/colors';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

const MypageScreen = () => {
  //* State ----------------------------------------------------------------------
  // const [langId, setLangId] = useRecoilState(langIdState);
  //* Hooks 선언 ------------------------------------------------------------------
  //# 언어설정에 따른 번역
  // const { t, i18n } = useTranslation();
  //* Functions ------------------------------------------------------------------

  //* lifecycle ------------------------------------------------------------------
  // useEffect(() => {
  // if (langId) {
  // i18n.changeLanguage(LANGUAGES[Number(langId) - 1].name);
  // }
  // }, [langId]);
  //* render ---------------------------------------------------------------------
  return (
    <Container>
      <Text>My page</Text>
    </Container>
  );
};
export default MypageScreen;
