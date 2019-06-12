<template>
    <div class="tickets_list_section">
        <h3 class="mb-3">Total Tickets: {{tickets.length}}</h3>
        <b-row align-h="around" id="tickets_list_row">
            <b-col>
                <b-table 
                    striped hover 
                    show-empty
                    empty-text="No tickets yet"
                    id="tickets_list_table"
                    :items="tickets"
                    :fields="fields"
                    :per-page="perPage"
                    :current-page="currentPage"
                    small>
                    
                    <template slot="created_at" slot-scope="created_at" :id="created_at.value">
                        {{ created_at.value | moment( "Do MMMM YYYY") }}
                    </template>
                    <template slot="subject" slot-scope="subject" :id="subject.value">
                        <span class="capitalize">{{ subject.value }} </span>
                    </template>

                    <template slot="action" slot-scope="action" :id="action.item.id">
                        <button class="btn btn-primary" @click="onEdit(action.item)">Details</button>
                    </template>
                </b-table>
            </b-col>
        </b-row>

        <b-row align-h="center">
            <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                aria-controls="my-table"
                size="sm"
                class="table_pagination"
            ></b-pagination>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'ViewList',
    props : {
        tickets : Array
    },
    data () {
        return {
            perPage: 10,
            currentPage: 1,
            totalRows: 1, 
            fields: [
                { key: 'created_at', label: 'Requested', sortable: true},
                { key: 'subject', label: 'Ticket Subject', sortable: true},
                { key: 'action', label: 'Action' }
            ],
        }
    },
    methods: { 
        // Open dialog box to edit the selected intervention
        onEdit(ticketDetails) {
            this.$parent.ticketDetail = ticketDetails
        },
    },
    created() {
        // Set the initial number of tickets
        this.totalRows = this.tickets.length;
    }
}
</script>

<style>
.tickets_list_section{
    padding: 20px;
}


/* Tickets list table */
#tickets_list_table{
    border-collapse: collapse;
}
#tickets_list_table > thead tr th,
#tickets_list_table > tbody tr td{
    border: 1px solid #dddddd;
    text-align: center;
}
#tickets_list_table > thead tr th{
    color: #35495E;
    vertical-align: middle;
}
#tickets_list_table > tbody tr td{
    vertical-align: middle;
}
#tickets_list_table > tbody tr td:nth-child(2){
    padding-left: 15px;
    text-align: left;
}
#tickets_list_table thead tr > th[aria-colindex="1"]{
    width: 150px;
}
#tickets_list_table thead tr > th[aria-colindex="2"]{
    width: 500px;
}
#tickets_list_table thead tr > th[aria-colindex="3"]{
    width: 150px;
}
</style>