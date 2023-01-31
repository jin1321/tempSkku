import React from "react";

import background from "../../assets/images/mainbackground.png";
import { Hero, Main } from "../../components";



const { PostContainer, Header, PostElementContainer, SymptomsContainer, Divider, SymptomsBubble, CategoryContainer, CategoryBubble,
  PostElement, Column1, Date, NewestLabel, DateLabel, StateLabel, OldestLabel, Title1, Content, ContentElement, State, UnState,
 WriteButton, ColumnBottom, PageContainer, PageNumber, PageNumberContainer,
  CategoryBubbleSelected, NewestLabelSelected, OldestLabelSelected, Announcement} = require("./styles");

export const Board = (props) => {

    const heroHeight = Math.min(window.innerWidth / 2, 400);

    function board(i) {
        props.setBoard(props.postData[i])
        props.setPageLoad(0)
        props.setPostLoad(0)
        props.setIsBoard(true)
    }
    return (
        <Main>
            <Hero background={background} height={`${heroHeight}px`} />
            <PostContainer>

                <Header>Recent Posts</Header>

                <CategoryContainer>


                    {!props.internalSelect && <CategoryBubble onClick={({target}) => props.setToAnnouncement()}>
                        Announcement</CategoryBubble>}
                    {props.internalSelect && <CategoryBubbleSelected>
                        Announcement</CategoryBubbleSelected>}

                    {!props.EBinSelect && <CategoryBubble onClick={({target}) => props.setToReport()}>
                        Report</CategoryBubble>}
                    {props.EBinSelect && <CategoryBubbleSelected>
                        Report</CategoryBubbleSelected>}
                        
                    {!props.orthopedicsSelect && <CategoryBubble onClick={({target}) => props.setToReference()}>
                        Reference</CategoryBubble>}
                    {props.orthopedicsSelect && <CategoryBubbleSelected>
                        Reference</CategoryBubbleSelected>}

                        
                </CategoryContainer>

                <Column1>
                    <ContentElement>
                        <Column1>
                            {props.newestSelect && <NewestLabelSelected>Newest</NewestLabelSelected>}
                            {!props.newestSelect && <NewestLabel onClick={({target}) => props.setToNewest()}>
                                Newest</NewestLabel>}

                            {props.oldestSelect && <OldestLabelSelected>Oldest</OldestLabelSelected>}
                            {!props.oldestSelect && <OldestLabel onClick={({target}) => props.setToOldest()}>
                                Oldest</OldestLabel>}
                                
                        </Column1>
                    </ContentElement>
                    <DateLabel>CATEGORY</DateLabel>
                    <DateLabel>DATE</DateLabel>
                </Column1>

                <PostElementContainer>
                    <Divider />
                    </PostElementContainer>
                <Divider/>

                <ColumnBottom>
                    <PageContainer>
                            {/* <PageButton /> */}
                    </PageContainer>
                    {!props.isDoctor && <WriteButton to={'./Newpost'}>Write A New Post</WriteButton>}
                </ColumnBottom>

            </PostContainer>
        </Main>



    

  );
};

export default Board;
