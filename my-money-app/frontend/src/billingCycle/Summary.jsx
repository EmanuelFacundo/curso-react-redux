import React, {Component} from 'react'

import Grid from '../common/layout/Grid'
import Row from '../common/layout/Row'
import ValueBox from '..//common/widget/ValueBox'

export default ({credit, debt}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox col='12 4' color='green' icon='bank'
                    value={`R$ ${credit.toFixed(2)}`} text='Total de Créditos' />
                <ValueBox col='12 4' color='red' icon='credit-card'
                    value={`R$ ${debt.toFixed(2)}`} text='Total de Débitos'/>
                <ValueBox col='12 4' color='blue' icon='bank'
                    value={`R$ ${(credit - debt).toFixed(2)}`} text='Valor Consolidado' />
            </Row>
        </fieldset>
    </Grid>
)
