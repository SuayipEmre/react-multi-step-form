import React from 'react'
import * as S from './styled'

export const Step = ({
    onBack,
    handleSubmit,
    title,
    subtitle,
    hasBackButton,
    hasNextButton,
    children
}) => {
    return (
        <S.Step onSubmit={handleSubmit}>

            <S.StepHeader>
                <S.Title>{title} </S.Title>
                <S.SubTitle>{subtitle}</S.SubTitle>
            </S.StepHeader>
            <S.Body>{children}  </S.Body>
            <S.StepFooter>
                {hasBackButton && <S.GoBackButton onClick={onBack}>Go Back</S.GoBackButton>}
                {hasNextButton  ?  <S.GoNextButton type='submit' >Next Step</S.GoNextButton> : <S.ConfirmButton type='submit' >Confirm</S.ConfirmButton>}
            </S.StepFooter>

        </S.Step>
    )
}
