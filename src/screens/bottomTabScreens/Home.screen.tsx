import React, {useCallback, useEffect, useState} from 'react';
// import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import {useRecoilState} from 'recoil';
import {RefreshControl, Text} from 'react-native';
import {colors} from '../../utils/colors';
import HomeHeaderTemplate from '../../components/templates/homeTemplates/Home.header.template';
import SvgIconAtom from '../../components/atoms/common/SvgIcon.atom';
import TextAtom from '../../components/atoms/common/Text.atom';
import BottomSlideModalTemplate from '../../components/templates/commonTemplates/Bottom.slide.modal.template';
import {mbtiCategory, mbtiData} from '../../utils/constant';
// import { LANGUAGES } from '../../../utils/constant/constant';
// import { langIdState } from '../../../utils/recoilStates/user.state';
// import colors from '../../../utils/colors';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;
const ContentContainer = styled.ScrollView`
  padding: 0px 20px;
`;
const CardContainer = styled.View`
  padding: 20px 0px;
  border-bottom-width: 1px;
  border-color: ${colors.gray};
`;
const CardBtnContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
`;
const CardBtn = styled.TouchableOpacity`
  margin-right: 15px;
`;
const ContextContainer = styled.View`
  align-items: center;
`;
const CateScrollContainer = styled.ScrollView`
  margin: 30px 15px;
`;
const CateContainer = styled.TouchableOpacity<{isSelected: boolean}>`
  border-width: 1px;
  border-radius: 8px;
  border-color: ${colors.primary};
  background-color: ${props =>
    props.isSelected ? colors.primary : colors.white};
  padding: 12px 25px;
  margin: 0px 5px;
`;
const ConfirmBtn = styled.TouchableOpacity`
  align-items: center;
  border-width: 1px;
  border-color: ${colors.gray};
  padding: 12px 35px;
  border-radius: 8px;
`;
const HomeScreen = () => {
  const [isRefresh, setIsRefresh] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mCtgry, setMCtgry] = useState([]);
  const [selectedCtgry, setSelectedCtgry] = useState([]);
  //# 피드 업데이트
  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(() => {
    setIsRefresh(true);
    wait(2000).then(() => {
      setIsRefresh(false);
      console.log('hello world!');
    });
  }, []);

  //# 필터 확인 버튼 이벤트
  const onFilterConfirmEvent = () => {
    setIsVisible(false);
  };

  //# 필터 아이템 클릭 이벤트
  const onCateSelectEvent = (cateNm: string) => {
    /// 전체보기인 경우
    if (cateNm === '전체보기') {
      if (selectedCtgry?.find(_res => _res === cateNm)) {
        console.log('배열에 요소가 있다', selectedCtgry);
      } else {
        setSelectedCtgry([...selectedCtgry, cateNm]);
        console.log('배열에 요소가 없다', selectedCtgry);
      }
    }
  };
  //# 필터 모달 내용
  const FilterComponent = () => {
    return (
      <ContextContainer>
        <TextAtom text={'카테고리를 선택해주세요'} type={'Title2'} />
        <CateScrollContainer
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}>
          {mCtgry?.map((res, idx) => {
            return (
              <CateContainer
                key={idx}
                onPress={() => onCateSelectEvent(res)}
                isSelected={selectedCtgry?.find(_res => _res === res)}>
                <TextAtom text={res} type={'Body4'} />
              </CateContainer>
            );
          })}
        </CateScrollContainer>

        <ConfirmBtn onPress={onFilterConfirmEvent}>
          <TextAtom text={'확인'} type={'Body2'} />
        </ConfirmBtn>
      </ContextContainer>
    );
  };

  //# ctgry 넣어주기
  useEffect(() => {
    let cate = ['전체보기', ...mbtiCategory];

    setMCtgry(cate);
  }, []);

  //* render ---------------------------------------------------------------------
  return (
    <Container>
      <ContentContainer
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isRefresh} onRefresh={onRefresh} />
        }>
        <HomeHeaderTemplate setIsVisible={setIsVisible} />
        {mbtiData?.dataList?.map((res, idx) => {
          return (
            <CardContainer key={idx}>
              <TextAtom text={res.writer} type={'Title2'} />
              <TextAtom text={res.title} type={'Title4'} />
              <TextAtom text={res.discription} type={'Body2'} />

              <CardBtnContainer>
                <CardBtn>
                  <SvgIconAtom
                    name={res.bookmarkNo ? 'HeartGreen' : 'HeartEmpty'}
                    fill={'none'}
                    size={25}
                  />
                </CardBtn>

                <CardBtn>
                  <SvgIconAtom name={'Reply'} size={23} />
                </CardBtn>

                <CardBtn>
                  <SvgIconAtom name={'Share'} size={23} />
                </CardBtn>
              </CardBtnContainer>
            </CardContainer>
          );
        })}
      </ContentContainer>
      {mCtgry ? (
        <BottomSlideModalTemplate
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          children={<FilterComponent />}
        />
      ) : null}
    </Container>
  );
};
export default HomeScreen;
