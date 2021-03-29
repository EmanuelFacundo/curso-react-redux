import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './DashboardActions'
import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import ValueBox from '../common/widget/ValueBox'
import Row from '../common/layout/Row'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {

        const { credit, debt } = this.props.summary

        return(
            <div>
                <ContentHeader tittle='Dashboard' small='Version 1.0'/>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Créditos'/>
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos'/>
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit - debt}`} text='Valor Consolidado'/>
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    summary: state.dashboard.summary
})

const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)