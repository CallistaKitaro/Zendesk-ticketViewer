<template>
    <div class="tickets_detail_section">
        <h3 class="mb-3">Ticket Detail</h3>
        <div>
            <ul>
                <li class="ticket_detail_list"><span class="ticket_detail_data">Ticket ID</span>
                    <span class="ticket_detail_colon">:</span>
                    {{ticketDetail.id}}
                </li>
                <li class="ticket_detail_list"><span class="ticket_detail_data">Created At</span>
                    <span class="ticket_detail_colon">:</span>
                    <span class="ticket_detail_info" v-if="ticketDetail.created_at">{{ticketDetail.created_at | moment( "Do MMMM YYYY")}}</span>
                    <span class="ticket_detail_info" v-else>-</span>
                </li>
                <li class="ticket_detail_list"><span class="ticket_detail_data">Subject</span>
                    <span class="ticket_detail_colon">:</span>
                    <span class="ticket_detail_info capitalize" v-if="ticketDetail.subject">{{ticketDetail.subject}}</span>
                    <span class="ticket_detail_info" v-else>-</span>
                </li>
                <li class="ticket_detail_list"><span class="ticket_detail_data">Ticket Description</span>
                    <span class="ticket_detail_colon">:</span>
                    <span class="ticket_detail_info capitalize" v-if="ticketDetail.description">{{ticketDetail.description}}</span>
                    <span class="ticket_detail_info" v-else>-</span>
                </li>
                <li class="ticket_detail_list"><span class="ticket_detail_data">Priority</span>
                    <span class="ticket_detail_colon">:</span>
                    <span class="ticket_detail_info capitalize" v-if="ticketDetail.priority">{{ticketDetail.priority}}</span>
                    <span class="ticket_detail_info" v-else>-</span>
                </li>
                <li class="ticket_detail_list"><span class="ticket_detail_data">Status</span>
                    <span class="ticket_detail_colon">:</span>
                    <span class="ticket_detail_info capitalize" v-if="ticketDetail.status">{{ticketDetail.status}}</span>
                    <span class="ticket_detail_info" v-else>-</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ViewList',
    props : {
        ticketDetail : Object
    }
}
</script>

<style>
.tickets_detail_section{
    padding: 20px;
}
.ticket_detail_list{
    margin: 2px 5px;
}
.ticket_detail_data{
    display: inline-block;
    width: 130px;
    vertical-align: top;
}
.ticket_detail_colon{
    display: inline-block;
    padding-right: 10px;
    vertical-align: top;
}
.ticket_detail_info{
    overflow-wrap: break-word;
    display: inline-block;
    vertical-align: top;
    width: 450px;
}
</style>