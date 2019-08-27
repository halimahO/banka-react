import { mapDispatchToProps } from '../pages/ClientDashboard';

describe('Client Dashboard component Tests', () => {
  it('should dispatch UserTransaction request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).UserTransaction();
  });
  it('should dispatch debit request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).debit();
  });
  it('should dispatch credit request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).credit();
  });
});
