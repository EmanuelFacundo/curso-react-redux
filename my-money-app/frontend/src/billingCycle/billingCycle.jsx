import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabHeader from '../common/tab/TabHeader'
import TabsContent from '../common/tab/TabsContent'
import TabContent from '../common/tab/TabContent'
import BillingCycleList from './BllingCycleList'
import BillingCycleForm from './BillingCycleForm'
import { create, update, remove,  init } from './BillingCycleAction'

class BillingCycles extends Component {

    componentWillMount() {
        this.props.init()
    }

    render(){
        return (
            <div>
                <ContentHeader tittle='Ciclos de Pagamento' small='Cadastro'/>
                <Content>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label='Listar' icon='bars' target='tabList'></TabHeader>
                        <TabHeader label='Incluir' icon='plus' target='tabCreate'></TabHeader>
                        <TabHeader label='Alterar' icon='pencil' target='tabUpdate'></TabHeader>
                        <TabHeader label='Excluir' icon='trash-o' target='tabDelete'></TabHeader>
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id='tabList'>
                            <BillingCycleList/>
                        </TabContent>
                        <TabContent id='tabCreate'>
                            <BillingCycleForm onSubmit={this.props.create} submitClass='primary' submitLabel='Incluir'/>                            
                        </TabContent>
                        <TabContent id='tabUpdate'>
                            <BillingCycleForm onSubmit={this.props.update} submitClass='info' submitLabel='Alterar'/>
                        </TabContent>
                        <TabContent id='tabDelete'>
                            <BillingCycleForm onSubmit={this.props.remove} readOnly submitClass='danger' submitLabel='Excluir'/>
                        </TabContent>
                    </TabsContent>
                </Tabs>
                </Content>

            </div>
        )
    }

}

const mapDispatchToProps = dispatch => bindActionCreators({  
    create,
    update,
    remove,
    init
}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycles)