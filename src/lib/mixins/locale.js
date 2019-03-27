import { t } from '@/lib/locale';

export default {
  methods: {
    t(...args) {
      return t.apply(this, args);
    }
  }
};
