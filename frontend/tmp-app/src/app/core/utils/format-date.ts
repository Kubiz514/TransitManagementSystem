import * as moment from 'moment';

export const formatDate = (date: Date , dateFormat: string) => moment(date).format(dateFormat);